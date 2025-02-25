import {resolvers} from "server/resolvers.js"
import {schemas} from "server/schema.js"
const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');
const express = require('express');
 
// Construct a schema, using GraphQL schema language
const schema = buildSchema(schemas);
 
// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  resolvers
};
 
const app = express();
 
// Create and use the GraphQL handler.
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root,
  }),
);
 
// Start the server at port
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');