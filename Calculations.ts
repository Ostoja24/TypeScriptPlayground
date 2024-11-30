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
        const numbersStock: number [] = [];
        const opetatorsStock: string[] = [];
        let trimmeredNumericOperations = numericOperation.replace(/\s+/g, '');
        const tokens = trimmeredNumericOperations.match(/\d+|\+|\-|\*|\//g);
        for (let token of tokens){
            if (/\d/.test(token)){
                numbersStock.push(Number(token))
            }
            else if (['+','-','/','*'].includes(token)){
                do {
                opetatorsStock.push(token)
            } while (opetatorsStock.length > 0 && this.higherPriorityOperators)
        }        
    }
    static higherPriorityOperators (operator1:string, operator2: string):boolean{
        const operatorPriority = {'+':1,'-':1,'*':2,'/':2};
        return operatorPriority[operator1] >= operatorPriority[operator2];
    }


}