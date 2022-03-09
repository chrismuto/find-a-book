const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken, authMiddleware } = require('../utils/auth');

const resolvers = {
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        try {
        const user = await User.create({ username, email, password });
        const token = await signToken(user);
        return { token, user };
        }
        catch (error) {
          console.log(error);
          throw new UserInputError("Please provide unique username and email")
        }
      },

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
    },
}

module.exports = resolvers;