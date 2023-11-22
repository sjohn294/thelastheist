import React from 'react';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { QUERY_BY_TYPE } from '../../utils/queries.js';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { QUERY_ALL_Vehicles } from '../../utils/queries.js';
// import '../../assets/car_images/1.png'


const VicList = () => {
  const { category } = useParams();
  // const { loading, error, data } = useQuery(QUERY_BY_TYPE, {
  //   variables: { type: category },
  // });
  const { loading, error, data } = useQuery(QUERY_ALL_Vehicles);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="list-container">
      {/* data.vehiclesByType.length */}
      {data && data.allVehicles.length ? (
        data.allVehicles.map((item, index) => (
          <Card key={index} className='item-card'>
            <Card.Img variant="top" src={data.allVehicles.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary" href={item.moreInfoLink}>Learn More</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No vehicles found for this category.</p>
      )}
    </div>
  );
};

export default VicList;
