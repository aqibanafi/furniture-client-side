import React, { useState } from 'react';
import Taka from '../../assets/icons/taka.png'
import { FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';

const CategoryCourseDisplay = ({ courseDetails }) => {

    let count = 0;
    //Color of Wishlist
    const [wishlistColor, setWishListColor] = useState(' ')
    const [listButtonDisable, setListButtonDisable] = useState(false);

    //Handle For Add to wish list
    const handleAddWishList = id => {
        setWishListColor('text-red-500')
        count++;
        if(count > 0) {
            setListButtonDisable(true)
        }
        const wishList = {
            name,
            location,
            resealablePrice,
            originalPrice,
            yearOfUse,
            postTime,
            sellersName
        }
        fetch(`http://localhost:5000/addtowishlist/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishList)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product Added to Wishlist")
                }
            })
    }

    //Distructure Property
    const { name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName, _id } = courseDetails;
    return (
        <div className='shadow-xl p-10 rounded-lg bg-accent w-[400px]'>
            <img className='w-80 mb-5 rounded-xl' src={picture} alt="" />
            <div className='flex justify-between'>
                <p className='text-2xl font-semibold text-primary mb-5'>{name}</p>
                <button onClick={() => handleAddWishList(_id)} disabled={listButtonDisable}><FaHeart className={`text-2xl ${wishlistColor}`}></FaHeart></button>
            </div>
            <p className='mb-1'>Location: <span className='font-semibold'>{location}</span></p>
            <p className='flex mb-1'>Resale Price: <span className='flex items-center ml-2 font-semibold'>{resealablePrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='flex mb-1'>Original Price: <span className='flex items-center ml-2 font-semibold'>{originalPrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='mb-1'>Year of Uses: <span className='font-semibold'>{yearOfUse}</span></p>
            <p className='mb-1'>Posted: <span className='font-semibold'>{postTime}</span></p>
            <p>Seller Name: <span className='font-semibold'>{sellersName}</span></p>
            <label htmlFor="booking-modal" className="btn btn-primary w-full text-white mt-10">Book Now</label>
        </div>
    );
};

export default CategoryCourseDisplay;