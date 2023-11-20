import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';











export default function VicTypes() {
    const categories =[
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
        {title: '', image:'', dataLink:''},
    ]

    return (
        <div className= 'type-container'>
            {categories.map((type, index) => (
                 <Card key={index} className='card'>
                 <Card.Img variant="top" src={type.image} />
                 <Card.Body>
                     <Card.Title>{type.title}</Card.Title>
                     
                     <Button variant="primary" href={type.dataLink}>See all</Button>
                 </Card.Body>
             </Card>
            ))}
        </div>
    )
}