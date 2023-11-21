import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SedanImage from '../../assets/car_images/1.png';
import SuvImage from '../../assets/car_images/4.jpeg';
import TruckImage from '../../assets/car_images/10.jpg';
import HatchbackImage from '../../assets/car_images/42.jpg';
import WagonImage from '../../assets/car_images/48.jpg';
import MinivanImage from '../../assets/car_images/62.jpeg';
import CoupeImage from '../../assets/car_images/33.jpg';
import VanImage from '../../assets/car_images/70.jpg';
import PagesCSS from '../pages/pages.css';



export default function VicTypes() {
    const categories =[
        {title: 'Sedans', image:SedanImage, dataLink:''},
        {title: 'SUVs', image:SuvImage, dataLink:''},
        {title: 'Trucks', image:TruckImage, dataLink:''},
        {title: 'Hatchbacks', image:HatchbackImage, dataLink:''},
        {title: 'Wagons', image:WagonImage, dataLink:''},
        {title: 'Minivans', image:MinivanImage, dataLink:''},
        {title: 'Coupes', image:CoupeImage, dataLink:''},
        {title: 'Vans', image:VanImage, dataLink:''},
    ]

    return (
        <div className= 'type-container'>
            {categories.map((type, index) => (
                <Card key={index} className='card' style={{ height: '200px', width: '200px' }}>
                <Card.Img variant="top" className={`${PagesCSS.image} card-image`} src={type.image} style={{ height: '100px', width: '100px' }} />
                <Card.Body>
                    <Card.Title>{type.title}</Card.Title>
                    <Button variant="primary" href={type.dataLink}>See all</Button>
                </Card.Body>
            </Card>
            ))}
        </div>
    )
}