// VicList.js
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

const VicList = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`your-api-endpoint/${category}`)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div className="list-container">
      {items.length ? (
        items.map((item, index) => (
          <Card key={index} className='item-card'>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button variant="primary" href={item.moreInfoLink}>Learn More</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VicList;
