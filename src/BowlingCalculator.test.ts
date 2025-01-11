import {BowlingCalculator} from './BowlingCalculator';
test('Bowling Set 1, expected 197', () => {
    const bowlingResult = ['2','3','X','3','4','4','4','5','5','X','X','X','X','X','X','X'];
    expect(BowlingCalculator.bowlingResultsCalculation(bowlingResult)).toEqual(197);
})
test('Bowling Set 2, expected 202', () => {
    const bowlingResult = ['2','/','X','3','4','4','4','5','5','X','X','X','X','X','X','-'];
    expect(BowlingCalculator.bowlingResultsCalculation(bowlingResult)).toEqual(202);
})
test('Bowling error with score, expected Error thrown',() =>{
        const bowlingResult = ['2','&','X','3','4','4','4','5','5','X','X','X','X','X','X','-'];
        expect(() => BowlingCalculator.bowlingResultsCalculation(bowlingResult)).toThrow(Error('Problem with score, please check input scores'));
    })
test('Bowling error with spare sign, expected Error thrown',() =>{
        const bowlingResult = ['/','X','3','4','4','4','5','5','X','X','X','X','X','X','-'];
        expect(() => BowlingCalculator.bowlingResultsCalculation(bowlingResult)).toThrow(Error('Spare sign problem, please resolve'));
    })
test('Bowling set with only X, expected 300',() => {
    const bowlingResult = ['X','X','X','X','X','X','X','X','X','X','X','X'];
    expect(BowlingCalculator.bowlingResultsCalculation(bowlingResult)).toEqual(300);
})