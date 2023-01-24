const { ApolloServer, gql } = require('apollo-server-express');

const express = require('express');
const app = express();
const port = process.env.PORT || 4001;

// Строим схему с помощью языка схем GraphQL

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Предоставляем функции распознавания для полей схемы

const resolvers = {
  Query: {
    hello: () => 'Hello world'
  }
};
// настройка appolo server
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: '/api' });

app.get('/', (req, res) => res.send('Hello word11'));

app.listen(port, () => {
  console.log(`GraphQl Server running at http ${port},${server.graphqlPath}`);
});
