const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const moodList = require('./moodList');
const { getMoods } = require('../../data/moods');

const query = new GraphQLObjectType({
  name: 'RootQueryType', // an arbitrary name
  fields: {
    moods: {
      type: moodList,
      args: {
        email: {
          name: 'email',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (parent, args) => getMoods(args.email)
    }
  }
});

module.exports = query;
