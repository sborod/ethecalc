export default class CalculatorStringChecker {
    check_on_input(str) {
        let contain_only_digits_and_operators = /^[\d\+\-\*\/\.]+$/.test(str);
        if (!contain_only_digits_and_operators) return false;

        let two_operators_in_a_row = /[\+\-\*\/\.][\+\-\*\/\.]$/.test(str);
        let minus_after_multi_or_division = /[\*\/]\-$/.test(str);
        if (two_operators_in_a_row && !minus_after_multi_or_division) return false;

        let starts_from_operator = /^[\+\*\/]/.test(str);
        if (starts_from_operator) return false;

        let contain_more_than_3_digits_after_point = /\.\d{3}\d+$/.test(str);
        if (contain_more_than_3_digits_after_point) return false;

        let contain_more_than_12_digits_before_point = /[^\.]\d{12}$/.test(str);
        if (contain_more_than_12_digits_before_point) return false;

        let contain_two_points = /\d+\.\d+\.$/.test(str);
        if (contain_two_points) return false;

        let contain_two_or_more_operators = /^[\d\.]+[\+\-\*\/][\d\.]+[\+\-\*\/]/.test(str);
        if (contain_two_or_more_operators) return false;

        return true;
    }

    check_on_handle(str) {
        let contain_operator = /^[\d\.]+[\+\-\*\/]+[\d\.]+$/.test(str)
        if (!contain_operator) return false;

        let division_on_0 = /\/0$/.test(str);
        if (division_on_0) return false;

        let ends_with_point = /\.$/.test(str);
        if (ends_with_point) return false;

        return true;
    }

    sanity(str) {
        str = this._sanity_empty_string(str)
        str = this._sanity_remove_trailing_zeroes(str)

        return str;
    }

    _sanity_remove_trailing_zeroes(str) {
        if ( str.charAt(0) === "0" && str.length > 1 && str.charAt(1) !== "." ) {
            str = str.substr(1);
        }
        return str
    }

    _sanity_empty_string(str) {
        if ( str === "" ) {
            str = "0";
        }
        return str;
    }
}