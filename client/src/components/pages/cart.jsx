import { generatePayment } from './Schedule';
import { loadStripe } from '@stripe/stripe-js';
import Auth from ''

import vehicleSeeds from '../data/vehicleSeeds.json';

const Cart = () => {

    const scheduleDates = [''];
    const stripePayment = async (payment) => {
        const stripe = await loadStripe('51OCoF4JlYTFEIr9ijicYaiyXtzmW61Ch35GNUCpbKMofrCAtdeMwtcJzLIQdbQV0KFu27P3Iu6MuEcJ9mlmPfyfJ009GUAJdvb');
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{ price: 'YOUR_PRICE_ID', quantity: 1 }],
            mode: 'payment',
            payment_method_types: ['card'],
            customer_email: '',
            client_reference_id: 'Y',
        });

        if (error) {
            console.error('payment error:', error);
        }
    };

    const handleCheckout = () => {
        scheduleDates.forEach(date => {
            const payment = generatePayment(date);
            stripePayment(payment);
        });
    };


    const calculateTotalCost = () => {
        let totalCost = 0;
        vehicleSeeds.forEach(vehicle => {
            let price = 50;
            if (vehicle.type === 'sedan') {
                price = 50;
            } else if (vehicle.type === 'coupe') {
                price = 80;
            } else if (vehicle.type === 'truck') {
                price = 100;
            } else if (vehicle.type === 'SUV') {
                price = 80;
            } else if (vehicle.type === 'Minivan') {
                price = 80;
            }
            else if (vehicle.type === 'van') {
                price = 80;
            }
            else if (vehicle.type === 'Hatchback') {
                price = 60;
            }
            
            totalCost += price;
        });
        return totalCost;
    };


    return (
        <div>
            <h1>Cart</h1>
            <p>Total Cost: ${calculateTotalCost()}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;
