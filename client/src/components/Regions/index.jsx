import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Atlanta from '../../assets/images/atlicon.jpg';
import Charlotte from '../../assets/images/clticon.jpg';
import Miami from '../../assets/images/miaicon.jpg';
import '../pages/pages.css';







export default function Regions() {
    const region =[
        {title: 'ATL', image: Atlanta , dataLink:''},
        {title: 'CLT', image: Charlotte, dataLink:''},
        {title: 'MIA', image: Miami, dataLink:''},
       
    ]

    return (
        <div className= 'region-container'>
            {region.map((area, index) => (

                 <Card key={index} className='card'>
                 <Card.Img variant="region" src={area.image} />

                 <Card.Body>
                     <Card.Title>{area.title}</Card.Title>
                     
                     <Button as={Link} to={`/RegionList/${area.title.toUpperCase()}`}variant= "primary">Show all rentals in region</Button>
                 </Card.Body>
             </Card>
            ))}
        </div>
    )
}