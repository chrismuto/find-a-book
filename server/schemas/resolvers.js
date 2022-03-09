const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Mutation: {
      addUser: async (parent, args) => {
        try {
        console.log(args)
        const user = await User.create(args);
        const token = await signToken(user);
        return { token, user };
        }
        catch (error) {
          console.log(error);
          throw new UserInputError("Please provide unique username and email")
        }
      }
    }
    //   user: async (parent, { username }) => {
    //     return User.findOne({ username }).populate('thoughts');
    //   },
    //   thoughts: async (parent, { username }) => {
    //     const params = username ? { username } : {};
    //     return Thought.find(params).sort({ createdAt: -1 });
    //   },
    //   thought: async (parent, { thoughtId }) => {
    //     return Thought.findOne({ _id: thoughtId });
    //   },
    //   me: async (parent, args, context) => {
    //     if (context.user) {
    //       return User.findOne({ _id: context.user._id }).populate('thoughts');
    //     }
    //     throw new AuthenticationError('You need to be logged in!');
    //   },
    // },
}

module.exports = resolvers;