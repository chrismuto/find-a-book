import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_BOOK = gql`
//   mutation addBook($_id: BookData!) {
//     addBook(_id: $_id) {
//         token {
//         _id: ID
//         authors: [String]
//         description: String!
//         image: String
//         link: String
//         bookId: String!
//         title: String!
//         }
//       }
//     }
//   }
// `;