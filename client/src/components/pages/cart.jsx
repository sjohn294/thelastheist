
import { generatePayment } from './Schedule'; 
import { loadStripe } from '@stripe/stripe-js';


scheduleDates.forEach(date => {
    const payment = generatePayment(date);
    stripePayment(payment);
});

async function stripePayment(payment) {
    const stripe = await loadStripe('51OCoF4JlYTFEIr9ijicYaiyXtzmW61Ch35GNUCpbKMofrCAtdeMwtcJzLIQdbQV0KFu27P3Iu6MuEcJ9mlmPfyfJ009GUAJdvb');
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'YOUR_PRICE_ID', quantity: 1 }],
        mode: 'payment',
        payment_method_types: ['card'],
        customer_email: '',
        client_reference_id: 'Y',
    });
//
    if (error) {
        console.error('payment error:', error);
    }
}
