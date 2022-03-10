const {
  AuthenticationError,
  UserInputError
} = require('apollo-server-express');
const {
  User
} = require('../models');
const {
  signToken,
  authMiddleware
} = require('../utils/auth');

const resolvers = {
  Mutation: {
    addUser: async (parent, {
      username,
      email,
      password
    }) => {
      try {
        const user = await User.create({
          username,
          email,
          password
        });
        const token = await signToken(user);
        return {
          token,
          user
        };
      } catch (error) {
        console.log(error);
        throw new UserInputError("Please provide unique username and email")
      }
    },

    saveBook: async (parent, {authors, description, bookId, image, link, title} , context) => {
      console.log(context.user)
      if (context.user) {
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: { 
            authors,
            description,
            bookId,
            image,
            link,
            title } } },
          {
            new: true,
            runValidators: true
          }
        );
      }
      throw new AuthenticationError("You need to be logged in to save your books!");
    },

    login: async (parent, {
      email,
      password
    }) => {
      const user = await User.findOne({
        email
      });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return {
        token,
        user
      };
    },
  },
}

module.exports = resolvers;