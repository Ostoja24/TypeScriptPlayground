import { GraphQLError } from 'graphql';
import { BowlingCalculator } from '../BowlingCalculator.js';
export const resolvers = {
  Query:{
    getEndBowlingResult: ({ resultList }) => {
    const sumBowlingScore = BowlingCalculator.bowlingResultsCalculation(resultList)
    if (isNaN(sumBowlingScore)) {
      return new GraphQLError("Problem with score of bowling, please fix it");
    }
    return sumBowlingScore;
  }
}}