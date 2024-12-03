import { Calculator } from "./Calculator";
export class Calculations {
    constructor(){
    }
    static Calculate(firstNumber:number,secondNumber:number, operator: string):number{
        switch (operator){
            case ('+'): {
                const result = Calculator.add(firstNumber,secondNumber);
                console.log(result);
                return result;
            }
            case ('-'): {
                const result = Calculator.minus(firstNumber,secondNumber);
                console.log(result);
                return result;
            }
            case ('*'): {
                const result = Calculator.multiply(firstNumber,secondNumber);
                console.log(result);
                return result;
            }
            case ('/'): {
                if (firstNumber === 0 || secondNumber === 0){
                    console.log()
                    throw new Error("Number can't be 0, please provide another")
                }
                else
                {
                const result = Calculator.divide(firstNumber,secondNumber);
                console.log(result);
                return result;
            }
            }
            default: {
                throw new Error("Operator was not defined correctly".trim());
            }
        }
    }
    static convertStringCalculation(stringCalculation:string):number{
        if (Calculator.hasOneMathOperator(stringCalculation) && Calculator.hasSetNumbers(stringCalculation,2)){
            const result: number = new Function(`return ${stringCalculation}`)() as number;
            console.log(Calculator.hasSetNumbers(stringCalculation,2))
            return result;
        }
        else 
        throw new 
    Error("String have more than one char or mathematical operations can't be made.The operation can have max. 2 numbers".trim())
    }
    static multipleArithmeticOperation(numericOperation:string){
        const numbers: number [] = [];
        const operators: string [] = [];
        let trimmeredNumericOperations: string [] = numericOperation.split(' ');
        for (let token of trimmeredNumericOperations){
            if (Number.isInteger(Number(token))){
                numbers.push(Number(token))
            }
            else if (token.length == 1 && !Number.isInteger(Number(token))){
                operators.push(token)
            }
            else{
                throw new Error("Problem with operation, please review");
        }}
        operators.forEach((operator,index) => {
            if (this.returnOperatorPriority(operator) < 2)
                return;
               else {
                const result = this.Calculate(numbers[index], numbers[index + 1],operator);
                numbers[index] = result;
                numbers.splice(index + 1 , 1);
                operators.splice(index,1)
            }})
        operators.forEach((operator,index) => {
            const result = this.Calculate(numbers[index], numbers[index + 1],operator);
            numbers[index] = result;
            numbers.splice(index + 1 , 1);
            operators.splice(index,1)
        })
        return numbers[0];

}
    
    static returnOperatorPriority (operator:string):number {
        const operatorPriority = {'+':1,'-':1,'*':2,'/':2};
        if (operator in operatorPriority){
        return operatorPriority[operator as keyof typeof operatorPriority];
    } else {
        throw new Error("Undefined operator")
    }
}}