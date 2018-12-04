const _ = require('lodash');
const graphql = require('../graphql');

// We want to make a GET request with ?query=<graphql query>
// The event properties are specific to AWS. Other providers will differ.
module.exports.query = async event => {
  const graphqlQuery = _.get(event, 'queryStringParameters.query', null);

  if (!graphqlQuery) {
    return {
      statusCode: 400,
      body: JSON.stringify('Missing GraphQL query')
    };
  }

  try {
    const result = await graphql(graphqlQuery);
    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};
