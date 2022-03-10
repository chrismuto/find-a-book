const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  test: Int
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  saveBook(book: BookData): User
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

input BookData {
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