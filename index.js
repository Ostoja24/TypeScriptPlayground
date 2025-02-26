import { resolvers } from "../server/resolvers.js"
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
 
// Construct a schema, using GraphQL schema language
const typeDefs = loadSchemaSync('./server/schema.graphql', {
  loaders: [new GraphQLFileLoader()],
});
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: 3000 }, () =>
      console.log('Now browse to http://localhost:3000' + server.graphqlPath)
  )
 })