/// Spare -> Dodaje do okienka ktory mial spare punkty z nastepnego rzutu, 
// Strike -> dodaje do okienta ktory mial strike punkty z nastepnych 2 rzutow
/// Przy ostatnim okienku gdy mamy strike/spare dodajemy analogicznie 2 i 1 rzut

class BowlingCalculator{
    constructor(){
    }
    public static getBowlingResults(bowlingResults: string[]){
        return bowlingResults;
    }

    public static bowlingResultsCalculation(){
        const bowlingResultList: string[] = this.getBowlingResults;
        const bowlingCalculationsList: number[];
        let bowlingResultsCalculatorList = [];
        for (let i:number = 0; i<bowlingResultList.length - 1; i++){
            if (bowlingResultList[i] == "X" && i<(bowlingResultList.length - 3)){
                const bonus1:number = bowlingResultList[i+1];
                const bonus2 = bowlingResultList[i+2];
                bowlingCalculationsList.push(10 + bonus1 + bonus2);
            }
            }
        }
    public static returningValueBowling(char:string){
        if (char == 'X'){
            return 10;
        }
        else if (char == '-'){
            return 0;
        }
        else if (char == '/'){
            
        }
    }
