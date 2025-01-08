import {BowlingCalculator} from './BowlingCalculator';
test('add two numbers 1 + 5, expected 6', () => {
    const bowlingResult = ['2','3','X','3','/','4','4','5','5','X','X','X','X','X','X','X']
    expect(BowlingCalculator.bowlingResultsCalculation(bowlingResult));
})