/// Spare -> Dodaje do okienka ktory mial spare punkty z nastepnego rzutu, 
// Strike -> dodaje do okienta ktory mial strike punkty z nastepnych 2 rzutow
/// Przy ostatnim okienku gdy mamy strike/spare dodajemy analogicznie 2 i 1 rzut

export class BowlingCalculator{;
    constructor(){
    }
    public static getBowlingResults(bowlingResults: string[]):string[]{
        return bowlingResults.map(result => result);
    }

    public static bowlingResultsCalculation(bowlingScoresList:string[]){
        let sum = 0;
        const bowlingResultList: string[] = BowlingCalculator.getBowlingResults(bowlingScoresList);
        const bowlingCalculationsList: number[] = [];
        for (let i:number = 0; i<bowlingResultList.length - 1; i++){
            if (bowlingResultList[i] == "X" && i<=(bowlingResultList.length - 3)){
                const bonus1:number = BowlingCalculator.returningValueBowling(bowlingResultList[i+1]);
                const bonus2:number = BowlingCalculator.returningValueBowling(bowlingResultList[i+2]);
                bowlingCalculationsList.push(10 + bonus1 + bonus2);
            }
            else if (bowlingResultList[i] == "/" && i<=(bowlingResultList.length - 2)){
                const bonus1:number = BowlingCalculator.returningValueBowling(bowlingResultList[i+1]);
                bowlingCalculationsList.push((10 - this.returningValueBowling(bowlingResultList[i-1])) + bonus1);
            }
            else if (bowlingResultList[i] == "/" && i<=(bowlingResultList.length - 1)){
                bowlingCalculationsList.push((10 - this.returningValueBowling(bowlingResultList[i-1])));
            }
            else if (bowlingResultList[i] == "X" && i<=(bowlingResultList.length - 2)){
                const bonus1:number = BowlingCalculator.returningValueBowling(bowlingResultList[i+1]);
                bowlingCalculationsList.push(10 + bonus1);
            }
            else if (bowlingResultList[i] == '-'){
                bowlingCalculationsList.push(0);
            }
            else if (Number(bowlingResultList[i])){
                bowlingCalculationsList.push(Number(bowlingResultList[i]));
            }
            else {
                return this.returningValueBowling(bowlingResultList[i])
            }
            }
            return bowlingCalculationsList.forEach(score => sum += score)
        }
    public static returningValueBowling(char:string, previousValue?:number){
        if (char == 'X'){
            return 10;
        }
        else if (char == '-'){
            return 0;
        }
        else if (char == '/' && !isNaN(Number(previousValue))){
            return 10 - previousValue;
        }
        else if (!isNaN && Number(char)>=1 && Number(char)<=9)
        {
            return Number(char)
        }
        else {
            console.log(typeof(char))
            throw new Error('Problem with score, please check input scores');
        }
    }
}

