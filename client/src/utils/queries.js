import { gql } from '@apollo/client';


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



export const QUERY_BY_TYPE = gql`
  query VehicleSearch($type: String) {
    vehicleSearch(type: $type) {
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
