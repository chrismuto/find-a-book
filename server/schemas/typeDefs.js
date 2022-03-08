const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  test: Int
}

type Mutation {
  createUser(username: String!, email: String!, password: String!): Auth!
}

type Book {
    _id: ID
    authors: [String]
    description: String!
    image: String
    link: String
    bookId: String!
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }
`;

module.exports = typeDefs;

// title(title: String!): Book
// authors(authors: String): Book
// image(image: String): Book
// description(description: String!): Book
// link(link: String): Book
// bookId(bookId: String!): Book