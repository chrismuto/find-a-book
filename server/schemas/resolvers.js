const { AuthenticationError } = require('apollo-server-express');
const { Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      books: async () => {
        return Book.find();
      },
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
    },
}

module.exports = resolvers;