import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RegionList = ({ region }) => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // Fetch data based on the region
    // This is a placeholder for your data fetching logic
    fetch(`your-api-endpoint/rentals/${region}`)
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
        <p>Loading rentals...</p>
      )}
    </div>
  );
};

export default RegionList;
