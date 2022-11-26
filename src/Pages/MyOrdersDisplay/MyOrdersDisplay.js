import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersDisplay = ({ order }) => {

    const { picture, bookingItem, furniturePrice, _id } = order;
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
                    <Link to={`/dashbaord/payment/${_id}`}><button className="btn btn-primary w-full text-white font-bold mt-10">Pay Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersDisplay;