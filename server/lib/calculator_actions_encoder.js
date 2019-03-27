const web3CalculatorContract = require("./web3_calculator_contract")

class CalculatorActionsEncoder {
    encode_and_call (action, param1, param2) {
        [param1, param2] = this._convert_to_cents(action, param1, param2);
        return web3CalculatorContract.methods[action](param1, param2).call();
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