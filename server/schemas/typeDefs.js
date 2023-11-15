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
    doors: Int!
    passengerCount: Int!
    transmission: TransmissionType!
    fuelType: FuelType!
    mpg: Float!
    isPetFriendly: Boolean!
    createdAt: String!
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
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
    addCar(input: CreateCarInput!): Car
    updateCar(input: UpdateCarInput!): Car
    deleteCar(id: ID!): Car
  }

  input CreateCarInput {
    make: String!
    model: String!
    doors: Int!
    passengerCount: Int!
    transmission: TransmissionType!
    fuelType: FuelType!
    mpg: Float!
    isPetFriendly: Boolean!
  }

  input UpdateCarInput {
    id: ID!
    make: String
    model: String
    doors: Int
    passengerCount: Int
    transmission: TransmissionType
    fuelType: FuelType
    mpg: Float
    isPetFriendly: Boolean
  }
`;

module.exports = typeDefs;
