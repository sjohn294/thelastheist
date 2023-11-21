import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [address, setAddress] = useState('');
    const [insurance, setInsurance] = useState('');
    const [vehicleId, setVehicleId] = useState('');
    const [vehicleDetails, setVehicleDetails] = useState('');
    const [vehicleCost, setVehicleCost] = useState('');

}

const history = useHistory();

const handleDateChange = (date) => {
    setSelectedDate(date);
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Full Name:', fullName);
    console.log('Driver\'s License Number:', licenseNumber);
    console.log('Address:', address);
    console.log('Insurance:', insurance);
    console.log('Vehicle ID Number:', vehicleId);
    console.log('Vehicle Details:', vehicleDetails);
    console.log('Vehicle Cost per Day:', vehicleCost); 
    console.log('Payment:', payment); 
};
const payment = calculatePayment(); 

const calculatePayment = () => {
    const days = 1; 
    return days * vehicleCost;
};

useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
        history.push('/login');
    }
}, [history]);

return (
    <div>
        <h1>Booking Calendar</h1>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Full Name:
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label>
            <br />
            <label>
                Driver's License Number:
                <input type="text" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />
            </label>
            <br />
            <label>
                Address:
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <br />
            <label>
                Insurance:
                <input type="text" value={insurance} onChange={(e) => setInsurance(e.target.value)} />
            </label>
            <br />
            <label>
                Vehicle ID Number:
                <input type="text" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} />
            </label>
            <br />
            <label>
                Vehicle Details:
                <input type="text" value={vehicleDetails} onChange={(e) => setVehicleDetails(e.target.value)} />
            </label>
            <br />
            <label>
                Vehicle Cost per Day:
                <input type="number" value={vehicleCost} onChange={(e) => setVehicleCost(Number(e.target.value))} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
);


export default Schedule;
