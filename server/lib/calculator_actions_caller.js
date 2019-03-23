const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/f60e56788959405d91a19feca21ab8f8"));

const CalculatorActionsEncoder = require("./calculator_actions_encoder")
const calculator_actions_encoder = new CalculatorActionsEncoder();

const contractAddress = '0x6eab7a2d1f06dceca1bfe23788f4d0152f356f45'

class CalculatorActionsCaller {
    call_action (action, param1, param2) {
        let that = this;
        return web3.eth.call({
            to: contractAddress,
            data: calculator_actions_encoder.encode(action, param1, param2)
        }).then(function(result) {
            return web3.eth.abi.decodeParameter('int256', result);
        }).then(function(result) {
            return that._convert_from_cents(action, result)
        })
    }

    _convert_from_cents(action, result) {
        if (action === "multiply") {
            return (Number(result) / 1000000)
        } else {
            return Number(result) / 1000
        }
    }
}

module.exports = CalculatorActionsCaller;