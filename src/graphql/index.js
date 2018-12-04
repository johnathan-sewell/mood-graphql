const { graphql, GraphQLSchema } = require('graphql');
const query = require('./types/query');
const mutation = require('./types/mutation');

const schema = new GraphQLSchema({
  query,
  mutation
});

module.exports = queryString => graphql(schema, queryString);
