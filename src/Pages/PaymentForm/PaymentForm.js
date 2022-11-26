import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6ER7Lp1hEGgA9Cw7a14BemXNdjbOl53pSwVagt1cPDuP4ApFmXcF8ItlAfFOpJOx0IbuKwmn8TTl4sAIvxpqNv00zfKmSHiQ');
const PaymentForm = () => {

    const data = useLoaderData()
    return (
        <div>
            <h1>Payment For {data.bookingItem}</h1>
            <p>Please Pay {data.furniturePrice}</p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        fnData={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default PaymentForm;