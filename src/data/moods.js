const AWS = require('aws-sdk');
const { promisify } = require('util');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const getMoods = async email => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    KeyConditionExpression: '#email = :email',
    ExpressionAttributeNames: {
      '#email': 'email'
    },
    ExpressionAttributeValues: {
      ':email': email
    }
  };

  const asyncQuery = promisify(callback => {
    dynamoDb.query(params, callback);
  });

  const result = await asyncQuery();

  return result.Items;
};

const createMood = async mood => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: mood
  };

  const asyncPut = promisify(callback => dynamoDb.put(params, callback));

  await asyncPut();

  return mood;
};

module.exports.getMoods = getMoods;
module.exports.createMood = createMood;
