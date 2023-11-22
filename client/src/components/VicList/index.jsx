import React from 'react';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { QUERY_BY_TYPE } from '../../utils/queries.js';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';



const VicList = () => {
  const { category } = useParams();
  const { loading, error, data } = useQuery(QUERY_BY_TYPE, {
    variables: { type: category },
  });
  const vicList = data?.vehicleSearch || [];
console.log(category)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="list-container">

      {loading ? (
        <p>No vehicles found for this category.</p>
      ) : (
        vicList.map((item) => (
          <Card  className='item-card'>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.make}</Card.Title>
              <Card.Text>{item.model}</Card.Text>
              <Button variant="primary" href={item.moreInfoLink}>Learn More</Button>
            </Card.Body>
          </Card>
        ))


      )}
    </div>
  );
};

export default VicList;
