import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckoutForm = ({ fnData }) => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const stripe = useStripe();
    const elements = useElements();

    const { customerEmail, phoneNumber, furniturePrice, bookingItem } = fnData;

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const price = {
        price: furniturePrice
    }

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const address = form.address.value;
        const addressLine = form.addressTwo.value;
        const country = form.country.value;
        const city = form.city.value;
        const zip = form.zip.value;
        const phone = form.phone.value;

        const paymentInfo = {
            email: user?.email,
            firstName,
            lastName,
            address,
            addressLine,
            country,
            city,
            zip,
            phone
        }

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: customerEmail,
                        phone: phoneNumber
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentInfo)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    toast.success(`Your Payment is Success for ${bookingItem}`)
                    navigate('/')
                }
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='address' type="text" placeholder="Address" className="input input-bordered w-full" />
                    <input name='addressTwo' type="text" placeholder="Address line 2" className="input input-bordered w-full" />
                    <input name='country' type="text" placeholder="Country" className="input input-bordered w-full" />
                    <input name='city' type="text" placeholder="City / Town" className="input input-bordered w-full" />
                    <input name='zip' type="text" placeholder="Post code / ZIP" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" />
                </div>
                <div>
                    <textarea name='additional' className="textarea textarea-bordered w-full mt-5" placeholder="Additional information"></textarea>
                </div>
                <CardElement
                className='mt-5 bg-slate-300 p-5 border text-white'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-10 w-full btn-primary border-0 text-white hover:bg-green-500'
                    type="submit">
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;