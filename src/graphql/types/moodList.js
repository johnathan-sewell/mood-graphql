const { GraphQLList } = require('graphql');
const mood = require('./mood');

const moodListType = new GraphQLList(mood);

module.exports = moodListType;
