const { ApolloServer } = require('apollo-server');

const resolvers = require('./resolvers');
const typeDefs = require('./schema');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}: Basic Query Example  🚀 `);
});
