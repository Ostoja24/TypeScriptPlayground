import { GraphQLError } from 'graphql';
import { BowlingCalculator } from '../BowlingCalculator.js';

interface Results {
  resultsList: string[];
}

export const resolvers = {
  Query: {
    getEndBowlingResult: (_: unknown, { results }: { results: Results }) => {
      const sumBowlingScore = BowlingCalculator.bowlingResultsCalculation(results.resultsList);
      if (isNaN(sumBowlingScore)) {
        return new GraphQLError("Problem with score of bowling, please fix it");
      }
      return { endScore: sumBowlingScore };
    }
  }
}; 