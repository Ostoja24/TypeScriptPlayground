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
        const numbers: string [] = [];
        const operators: string [] = [];
        let trimmeredNumericOperations: string [] = numericOperation.split(' ');
        for (let token of trimmeredNumericOperations){
            if (Number.isInteger(Number(token))){
                numbers.push(token)
            }
            else if (token.length == 1 && !Number.isInteger(Number(token)))
                {
                operators.length > 0 && this.isOperator1biggerThanOperator2(operators[operators.length-1],operators[operators.length])}
                operators.push(token)
            }
            else{
                throw new Error("Problem with operation, please review");
        }
    }
    
    static returnOperatorPriority (operator:string):number {
        const operatorPriority = {'+':1,'-':1,'*':2,'/':2};
        if (operator in operatorPriority){
        return operatorPriority[operator as keyof typeof operatorPriority];
    } else {
        throw new Error("Undefined operator")
    }}
    static isOperator1biggerThanOperator2(operator1: string, operator2: string): boolean{
       if (this.returnOperatorPriority(operator1) > this.returnOperatorPriority(operator2)){
        return true;
       }
       else{
        return false;
       }
    }



}