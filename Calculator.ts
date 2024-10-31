
export class Calculator  {

    protected static add(firstNumber: number,secondNumber: number):number{
        const result:number = firstNumber + secondNumber;
        return result;
    }
    protected static minus(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber - secondNumber;
        return result;
    }
    protected static multiply(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber * secondNumber;
        return result;
    }
    protected static divide(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber / secondNumber;
        return result;
    }
}

