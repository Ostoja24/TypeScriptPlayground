
export class Calculator  {

    public static add(firstNumber: number,secondNumber: number):number{
        const result:number = firstNumber + secondNumber;
        return result;
    }
    public static minus(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber - secondNumber;
        return result;
    }
    public static multiply(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber * secondNumber;
        return result;
    }
    public static divide(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber / secondNumber;
        return result;
    }
    public static hasOneMathOperator(stringNumber:string){
        const match = stringNumber.match('/[+\-*/%^]/g')
        return match?.length === 1;
    }
}

