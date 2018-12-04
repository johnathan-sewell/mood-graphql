const { GraphQLObjectType, GraphQLString } = require('graphql');

const moodType = new GraphQLObjectType({
  name: 'MoodType', // an arbitrary name
  fields: {
    email: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    mood: {
      type: GraphQLString
    }
  }
});

module.exports = moodType;
