import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Atlanta from '../../assets/images/atlicon.jpg';
import Charlotte from '../../assets/images/clticon.jpg';
import Miami from '../../assets/images/miaicon.jpg';








export default function Regions() {
    const categories =[
        {title: 'ATL', image: Atlanta , dataLink:''},
        {title: 'CLT', image: Charlotte, dataLink:''},
        {title: 'MIA', image: Miami, dataLink:''},
       
    ]

    return (
        <div className= 'region-container'>
            {categories.map((area, index) => (
                 <Card key={index} className='region-card'>
                 <Card.Img variant="top" src={area.image} />
                 <Card.Body>
                     <Card.Title>{area.title}</Card.Title>
                     
                     <Button variant="primary" href={area.dataLink}>Show all rentals in region</Button>
                 </Card.Body>
             </Card>
            ))}
        </div>
    )
}