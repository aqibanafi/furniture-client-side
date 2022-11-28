import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyOrdersDisplay = ({ order }) => {

    const { picture, bookingItem, furniturePrice, _id } = order;

    //Handle Product Status Changed
    const handleStatusChanged = id => {
        const status = {
            status: "Sold"
        }

        fetch(`https://the-personal.vercel.app/makesoldproduct/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product Status Changed")
                }
            })
    }
    return (
        <div>
            <div className='shadow-xl p-10 w-[400px]'>
                <div>
                    <img className='w-80 rounded-lg mb-10' src={picture} alt="" />
                </div>
                <div>
                    <p className='font-bold text-xl mb-2'>{bookingItem}</p>
                    <p>Price: {furniturePrice}</p>
                </div>
                <div>
                    <Link to={`/dashbaord/payment/${_id}`}><button onClick={() => handleStatusChanged(bookingItem)} className="btn btn-primary w-full text-white font-bold mt-10">Pay Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersDisplay;