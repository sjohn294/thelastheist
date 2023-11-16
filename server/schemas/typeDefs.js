const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
    
  }

  type Vehicle {
    id: ID!
    make: String!
    model: String!
    size: String
    type: String
    doors: Int!
    fuel_type: String!
    mpg: Int
    range: Int
    passenger_capacity: Int!
    transmission: TransmissionType!
      }

   type Auth {
    token: ID!
    user: User
  }

  

  type Query {
    users: [User]
    user(name: String!): User
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
  }

`;

module.exports = typeDefs;
