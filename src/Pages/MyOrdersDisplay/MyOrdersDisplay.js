import React from 'react';

const MyOrdersDisplay = ({order}) => {

    const {picture, bookingItem, furniturePrice} = order;
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
                <button className="btn btn-primary w-full text-white font-bold mt-10">Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersDisplay;