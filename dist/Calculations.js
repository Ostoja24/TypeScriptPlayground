import { Calculator } from "./Calculator";
export class Calculations {
    constructor() {
    }
    static Calculate(firstNumber, secondNumber, operator) {
        switch (operator) {
            case ('+'): {
                return Calculator.add(firstNumber, secondNumber);
            }
            case ('-'): {
                return Calculator.minus(firstNumber, secondNumber);
            }
            case ('*'): {
                return Calculator.multiply(firstNumber, secondNumber);
            }
            case ('/'): {
                if (firstNumber === 0 || secondNumber === 0) {
                    throw new Error("Number can't be 0, please provide another");
                }
                else {
                    return Calculator.divide(firstNumber, secondNumber);
                }
            }
            default: {
                throw new Error("Operator was not defined correctly".trim());
            }
        }
    }
    static multipleArithmeticOperation(numericOperation) {
        const numbers = [];
        const operators = [];
        let trimmeredNumericOperations = numericOperation.split(' ');
        for (let token of trimmeredNumericOperations) {
            const num = Number(token);
            if (!isNaN(num)) {
                numbers.push(num);
            }
            else if (token.length == 1 && isNaN(Number(token))) {
                operators.push(token);
            }
            else {
                throw new Error("Problem with operation, please review");
            }
        }
        function performOperationsOnTables(index) {
            const result = Calculations.Calculate(numbers[index], numbers[index + 1], operators[index]);
            numbers[index] = result;
            numbers.splice(index + 1, 1);
            operators.splice(index, 1);
        }
        for (let i = 0; i < operators.length;) {
            if (Calculations.returnOperatorPriority(operators[i]) === 2) {
                performOperationsOnTables(i);
            }
            else
                i++;
        }
        for (let i = 0; i < operators.length;) {
            if (Calculations.returnOperatorPriority(operators[i]) < 2) {
                performOperationsOnTables(i);
            }
            else
                i++;
        }
        return numbers[0];
    }
    static returnOperatorPriority(operator) {
        const operatorPriority = { '+': 1, '-': 1, '*': 2, '/': 2 };
        if (operator in operatorPriority) {
            return operatorPriority[operator];
        }
        else {
            throw new Error("Undefined operator");
        }
    }
}
