pragma solidity >=0.4.0 <0.7.0;

contract SimpleCalculator {
    function add(int x, int y) public pure returns (int) {
        return x + y;
    }
    

    function subtract(int x, int y) public pure returns (int) {
        return x - y;
    }
    

    function divide(int x, int y) public pure returns (int) {
        return x / y;
    }
    

    function multiply(int x, int y) public pure returns (int) {
        return x*y;
    }
}
