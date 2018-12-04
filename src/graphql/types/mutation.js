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
      resolve: (parent, args) => {
        console.log('addMood', parent, args);
        const added = createMood(args);
        console.log('added', added);
        return added;
      }
    },
    ping: {
      args: {
        name: {
          name: 'pingName',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      type: new GraphQLNonNull(GraphQLString),
      resolve: (parent, args) => {
        console.log('ping', parent, args);
        return 'pong';
      }
    }
  }
});

module.exports = mutation;
