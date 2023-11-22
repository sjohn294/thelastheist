import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_VEHICLES = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_ALL_Vehicles = gql`
query SingleVehicle {
  allVehicles {
    id
    make
    model
    size
    type
    doors
    fuel_type
    mpg
    range
    passenger_capacity
    transmission
    image
  }
}
`;


export const QUERY_All = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_BY_TYPE = gql`
query QueryByType($type: String!) {
  vehiclesByType(type: $type) {
    id
    title
    description
    image
    moreInfoLink
    
  }
}
`;

export const QUERY_VEHICLES_BY_REGION = gql`
  query QueryVehiclesByRegion($regionId: ID!) {
    region(id: $regionId) {
      id
      name
      vehicles {
        id
        title
        description
        image
      }
    }
  }
`;
