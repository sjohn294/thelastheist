import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';









export default function Regions() {
    const categories =[
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
       
    ]

    return (
        <div className= 'region-container'>
            {categories.map((area, index) => (
                 <Card key={index} className='card'>
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