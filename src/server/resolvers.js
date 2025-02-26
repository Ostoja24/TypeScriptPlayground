import {BowlingCalculator} from 'src/BowlingCalculator.ts'
export const resolvers = {
  Query:{
    getEndBowlingResult: ({ resultList }) => {
    const sumBowlingScore = BowlingCalculator.bowlingResultsCalculation(resultList)
    if (sumBowlingScore == NaN) {
      return new GraphQLError("Problem with score of bowling, please fix it");
    }
    return sumBowlingScore;
  }
}}