export default class CalculatorStringToRequestEncoder {
    encode_and_request(str) {
        let uri = this._str_to_uri(str)
        if (!uri) {
            return null
        }
        return fetch(uri).then( res => res.json() )
    }

    _str_to_uri(str) {
        var action, param1, param2;

        if ( str.includes("*") ) {
            action = "multiply";
            [param1, param2] = str.split("*");
        } else if ( str.includes("/") ) {
            action = "divide";
            [param1, param2] = str.split("/");
        } else if ( str.includes("+") ) {
            action = "add";
            [param1, param2] = str.split("+");
        } else if ( str.includes("-") ) {
            action = "subtract";
            [param1, param2] = str.split("-");
        } else {
            return null;
        }
        
        let uri = `http://localhost:3000/calculator_actions/${action}/${param1}/${param2}`

        return uri
    }
}