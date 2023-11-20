const typeDefs = `

  type User {
    _id: ID
    name: String
    email: String
    password: String
    drivers_license: String
    drivers_ins: String
    address: String
    vehicles:[Vehicle]
  
  }



  type Vehicle {
    id: ID
    make: String
    model: String
    size: String
    type: String
    doors: Int
    fuel_type: String
    mpg: Int
    range: Int
    passenger_capacity: Int
    transmission: String
    users:[User]
    
  }



  type Auth {
    token: ID!
    user: User
  }


  

  type Query {

    allUsers: [User]

    singleUser(name: String, email: String, drivers_license: String,drivers_ins: String, address: String ): User

    allVehicles: [Vehicle]

    singleVehicle( id: ID, make: String, model: String, size: String, type: String,    doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Vehicle
    
  
  }




  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addVehicle( id: ID, make: String, model: String, size: String, type: String, doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Boolean

    updateVehicle( id: ID, make: String, model: String, size: String, type: String, doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Boolean

    deleteVehicle( id: ID, make: String, model: String, size: String, type: String, doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Boolean
  }

`;

module.exports = typeDefs;
