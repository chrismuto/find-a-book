const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String!
    image: String
    link: String
    bookId: String!
    title: String!
  }

  type Query {
    books: [Book]

  }
`;

module.exports = typeDefs;

// title(title: String!): Book
// authors(authors: String): Book
// image(image: String): Book
// description(description: String!): Book
// link(link: String): Book
// bookId(bookId: String!): Book