import React from 'react';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { QUERY_VEHICLES_BY_REGION } from '../../utils/queries.js';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


const RegionList = () => {
  const { region } = useParams();
  const { loading, error, data } = useQuery(QUERY_VEHICLES_BY_REGION, {
    variables: { type: region },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  useEffect(() => {
    fetch(`RegionList/${region}`)
      .then(response => response.json())
      .then(data => setRentals(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [region]);

  return (
    <div className="rentals-container">
      {rentals.length ? (
        rentals.map((rental, index) => (
          <Card key={index} className='rental-card'>
            <Card.Img variant="top" src={rental.image} />
            <Card.Body>
              <Card.Title>{rental.title}</Card.Title>
              <Card.Text>
                {rental.description}
              </Card.Text>
              <Button variant="primary" href={rental.detailsLink}>View Details</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No Rentals in this region.</p>
      )}
    </div>
  );
};

export default RegionList;
