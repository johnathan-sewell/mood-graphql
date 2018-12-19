const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const mood = require('./mood');
const { createMood } = require('../../data/moods');

const mutation = new GraphQLObjectType({
  name: 'RootMutationType', // an arbitrary name
  fields: {
    addMood: {
      args: {
        email: {
          name: 'email',
          type: new GraphQLNonNull(GraphQLString)
        },
        mood: {
          name: 'mood',
          type: new GraphQLNonNull(GraphQLString)
        },
        date: {
          name: 'date',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      type: mood,
      resolve: (parent, args) => createMood(args)
    }
  }
});

module.exports = mutation;
