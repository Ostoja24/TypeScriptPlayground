import { Calculator } from "./Calculator";
export class Calculations extends Calculator{
    constructor(){
        super()
    }
    static createCalculation(firstNumber:number,secondNumber:number, operator: string):number{
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
                throw new Error("Operator was not defined correctly");
            }
        }
    }


}