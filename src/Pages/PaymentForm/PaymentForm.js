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
            <div className='mb-10'>
                <h1 className='text-center font-bold text-3xl text-primary mb-3'>Payment For {data.bookingItem}</h1>
                <p className='font-bold text-lg text-center'>Please Pay <span className='text-green-600 text-xl ml-1'>{data.furniturePrice}</span></p>
            </div>
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