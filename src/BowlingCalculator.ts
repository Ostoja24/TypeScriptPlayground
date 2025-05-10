
export class BowlingCalculator{;
    constructor(){
    }
    public static getBowlingResults(bowlingResults: string[]):string[]{
        return bowlingResults.map(result => result);
    }

    public static bowlingResultsCalculation(bowlingScoresList:string[]){
        const bowlingResultList: string[] = BowlingCalculator.getBowlingResults(bowlingScoresList);
        const bowlingCalculationsList: number[] = [];
        for (let i:number = 0; i<bowlingResultList.length; i++){
            if (bowlingResultList[i] === "X" && i<(bowlingResultList.length - 3)){
                const bonus1:number = BowlingCalculator.returningValueBowling(bowlingResultList[i+1]);
                const bonus2:number = BowlingCalculator.returningValueBowling(bowlingResultList[i+2]);
                bowlingCalculationsList.push(10 + bonus1 + bonus2);
            }
            else if (bowlingResultList[i] === "/" && i<=(bowlingResultList.length - 2) && i>0){
                const bonus1:number = BowlingCalculator.returningValueBowling(bowlingResultList[i+1]);
                bowlingCalculationsList.push((10 - this.returningValueBowling(bowlingResultList[i-1])) + bonus1);
            }
            else if (bowlingResultList[i] === "/" && i===(bowlingResultList.length - 1)){
                bowlingCalculationsList.push((10 - this.returningValueBowling(bowlingResultList[i-1])));
            }
            else if (bowlingResultList[i] === "X" && i>=(bowlingResultList.length - 3)){
                bowlingCalculationsList.push(BowlingCalculator.returningValueBowling(bowlingResultList[i]));
            }
            else if (bowlingResultList[i] === '-'){
                bowlingCalculationsList.push(0);
            }
            else if (!isNaN(parseInt(bowlingResultList[i]))){
                bowlingCalculationsList.push(Number(bowlingResultList[i]));
            }
            else {
                return this.returningValueBowling(bowlingResultList[i]);
                
            }
        }
            return bowlingCalculationsList.reduce((sum, currentValue) => sum + currentValue, 0);
        }
    public static returningValueBowling(char:string, previousValue?:number){
        if (char === 'X'){
            return 10;
        }
        else if (char === '-'){
            return 0;
        }
        else if (char === '/'){
            if (previousValue == undefined){
                throw new Error('Spare sign problem, please resolve')
            }
            return 10 - previousValue;
        }
        else if ((!isNaN(Number(char)) && Number(char)>=1 && Number(char)<=9))
        {
            return parseInt(char)
        }
        else {
            throw new Error('Problem with score, please check input scores');
        }
    }
}

