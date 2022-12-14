import React from 'react';
import Taka from '../../assets/icons/taka.png'

const MyWishListDisplay = ({ wishList, setMyWishList }) => {

    return (
        <div className='shadow-xl p-10 rounded-lg bg-accent w-[400px]'>
            <img className='w-80 mb-5 rounded-xl' src={wishList.picture} alt="" />
            <p className='text-2xl font-semibold text-primary mb-5'>{wishList.name}</p>
            <p className='mb-1'>Location: <span className='font-semibold'>{wishList.location}</span></p>
            <p className='flex mb-1'>Resale Price: <span className='flex items-center ml-2 font-semibold'>{wishList.resalePrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='flex mb-1'>Original Price: <span className='flex items-center ml-2 font-semibold'>{wishList.officialPrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='mb-1'>Posted: <span className='font-semibold'>{wishList.postingTime}</span></p>
            <p>Seller Name: <span className='font-semibold'>{wishList.sellerName}</span></p>
            <label onClick={() => setMyWishList(wishList)} htmlFor="booking-modal" className="btn btn-primary w-full text-white mt-10">Book Now</label>
        </div>
    );
};

export default MyWishListDisplay;