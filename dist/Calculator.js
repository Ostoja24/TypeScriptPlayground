export class Calculator {
    static add(firstNumber, secondNumber) {
        const result = firstNumber + secondNumber;
        return result;
    }
    static minus(firstNumber, secondNumber) {
        const result = firstNumber - secondNumber;
        return result;
    }
    static multiply(firstNumber, secondNumber) {
        const result = firstNumber * secondNumber;
        return result;
    }
    static divide(firstNumber, secondNumber) {
        const result = firstNumber / secondNumber;
        return result;
    }
    static hasOneMathOperator(stringNumber) {
        const match = stringNumber.match(/[+\-*/%^]/g);
        return match?.length === 1;
    }
    static hasSetNumbers(string, howManyNumber) {
        const match = string.match(/\d+/g);
        return match?.length === howManyNumber;
    }
}
