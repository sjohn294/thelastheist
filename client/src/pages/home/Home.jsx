import { useQuery } from '@apollo/client';
import React from 'react';
import cars from '../../vehicleSeeds';
import styles from './home.module.css'; 


const cars = [
  { name: 'Sedan', type: 'Sedan' },
  { name: 'SUV', type: 'SUV' },
  { name: 'Compact', type: 'Compact' },
  { name: 'Truck', type: 'Truck' },
  { name: 'Hatchback', type: 'Hatchback'},
  { name: 'Coupe', type: 'Coupe' },
  { name: 'Wagon', type: 'Wagon' },
  { name: 'Minivan', type: 'Minivan' },
  { name: 'Van', type: 'Van'},
]
const Home = () => {
  return (

    <main>
      <nav class="navbar">
      <ul>
        <li><a href="/reservation" class="navbar-link">Reservation</a></li>
        <li><a href="/vehicles" class="navbar-link">Vehicles</a></li>
        <li><a href="/region" class="navbar-link">Region</a></li>
      </ul>
      </nav>

      <div className="flex-row justify-center">
          <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}>
        
          <div className={styles.cardSection}>
            {cars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

