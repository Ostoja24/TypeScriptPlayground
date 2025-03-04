import { GraphQLError } from 'graphql';
import { BowlingCalculator } from '../BowlingCalculator.js';
export const resolvers = {
    Query: {
        getEndBowlingResult: (_, { results }) => {
            const sumBowlingScore = BowlingCalculator.bowlingResultsCalculation(results.resultsList);
            if (isNaN(sumBowlingScore)) {
                return new GraphQLError("Problem with score of bowling, please fix it");
            }
            return { endScore: sumBowlingScore };
        }
    }
};
