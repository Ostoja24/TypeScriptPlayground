import { ApolloServer } from '@apollo/server';
import { startStandaloneServer} from '@apollo/server/standalone';
import {resolvers} from './resolvers.js';
import fs from 'fs';
import path from 'path';

const typeDefs = fs.readFileSync
(path.join(process.cwd(), 'src','server', 'schema.graphql'), 'utf8');
async function startServer() {
  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
  });
  console.log(` Server ready at: ${url}`);
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
startServer();