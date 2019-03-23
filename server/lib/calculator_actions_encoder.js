const AbiCoder = require('web3-eth-abi').AbiCoder;
const abi = new AbiCoder();

class CalculatorActionsEncoder {
    encode (action, param1, param2) {
        [param1, param2] = this._convert_to_cents(action, param1, param2);

        return abi.encodeFunctionCall({
            name: action,
            type: 'function',
            inputs: [{
                type: 'int256',
                name: 'x'
            }, {
                type: 'int256',
                name: 'y'
            }]
        }, [ param1.toString(), param2.toString() ]);
    }

    _convert_to_cents(action, param1, param2) {
        if (action === "divide") {
            param1 = Number(param1) * 1000000
            param2 = Number(param2) * 1000
        } else {
            param1 = Number(param1) * 1000
            param2 = Number(param2) * 1000
        }

        return [param1, param2]
    }
}

module.exports = CalculatorActionsEncoder;