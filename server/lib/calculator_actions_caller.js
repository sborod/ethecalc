const CalculatorActionsEncoder = require("./calculator_actions_encoder")
const calculator_actions_encoder = new CalculatorActionsEncoder();

class CalculatorActionsCaller {
    call_action (action, param1, param2) {
        return calculator_actions_encoder.encode_and_call(action, param1, param2)
            .then( (result) => this._convert_from_cents(action, result) )
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