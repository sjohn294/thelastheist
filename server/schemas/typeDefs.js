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
    region:[Region]
    price: Float
  }



  type Auth {
    token: ID!
    user: User
  }

  type Region {
      id: ID
      location: String
      users: [User]
      vehicles: [Vehicle]
    }
    
  

  type Query {

    allUsers: [User]

    singleUser(name: String, email: String, drivers_license: String,drivers_ins: String, address: String ): User

    allVehicles: [Vehicle]

    singleVehicle( id: ID, make: String, model: String, size: String, type: String,    doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Vehicle
    
    singleRegion(id:ID, location:String!): Region

    allRegions: [Region]
  
    checkout(products: [ProductInput]): Checkout


  }

  type Checkout {
    session: ID
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }



  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addVehicle( id: ID, make: String, model: String, size: String, type: String, doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Boolean

    updateVehicle( id: ID, make: String, model: String, size: String, type: String, doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Boolean

    deleteVehicle( id: ID, make: String, model: String, size: String, type: String, doors: Int, fuel_type: String, mpg: Int, range: Int, passenger_capacity: Int, transmission: String): Boolean

    updateProduct(_id: ID!, quantity: Int!): Product


  }

`;

module.exports = typeDefs;
