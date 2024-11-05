
class calculator{
    constructor(){
    }

    public add(firstNumber: number,secondNumber: number):number{
        const result:number = firstNumber + secondNumber;
        return result;
    }
    public minus(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber - secondNumber;
        return result;
    }
    public multiply(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber * secondNumber;
        return result;
    }
    public divide(firstNumber:number, secondNumber:number):number{
        const result:number = firstNumber / secondNumber;
        return result;
    }
}

