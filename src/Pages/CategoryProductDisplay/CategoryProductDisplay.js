import React, { useContext, useState } from 'react';
import Taka from '../../assets/icons/taka.png'
import { FaHeart } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Verified from '../../assets/icons/verified.png';
import { useQuery } from '@tanstack/react-query';
import { RevolvingDot } from 'react-loader-spinner'


const CategoryProductDisplay = ({ productDetails }) => {
    //Distructure Property
    const { name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName, _id } = productDetails;

    //Import User 
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: verifyUser = [], isLoading } = useQuery({
        queryKey: ['sellersInfo'],
        queryFn: async () => {
            const res = await fetch(`https://the-personal.vercel.app/buyer/${email}`)
            const data = await res.json()
            console.log(data)
            return data;
        }
    })

    console.log(verifyUser)

    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

    let count = 0;
    //Color of Wishlist
    const [wishlistColor, setWishListColor] = useState(' ')
    const [listButtonDisable, setListButtonDisable] = useState(false);


    //Handle For Add to wish list
    const handleAddWishList = id => {
        setWishListColor('text-red-500')
        count++;
        if (count > 0) {
            setListButtonDisable(true)
        }
        const wishList = {
            picture: picture,
            name: name,
            location: location,
            resealablePrice: resealablePrice,
            originalPrice: originalPrice,
            yearOfUse: yearOfUse,
            postTime: postTime,
            sellersName: sellersName,
            email: user?.email,
        }

        fetch(`https://the-personal.vercel.app/addnewproduct/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('thePersonal')}`
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

    return (
        <div className='shadow-xl p-10 rounded-lg bg-accent w-[400px]'>
            <img className='w-80 mb-5 rounded-xl' src={picture} alt="" />
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-2xl font-semibold text-primary mb-5'>{name}</p>
                </div>
                <div className='flex items-center mb-3 gap-3'>
                    <button onClick={() => handleAddWishList(_id)} disabled={listButtonDisable} className='hover:text-red-500'><FaHeart className={`text-2xl ${wishlistColor}`} title='Add to Wishlist'></FaHeart></button>
                    <label htmlFor="flag-modal" className='hover:text-red-500 hover:cursor-pointer'><FaFlag title='Make Report' className='text-xl flex'></FaFlag></label>
                </div>
            </div>
            <p className='mb-1'>Location: <span className='font-semibold'>{location}</span></p>
            <p className='flex mb-1'>Resale Price: <span className='flex items-center ml-2 font-semibold'>{resealablePrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='flex mb-1'>Original Price: <span className='flex items-center ml-2 font-semibold'>{originalPrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='mb-1'>Year of Uses: <span className='font-semibold'>{yearOfUse}</span></p>
            <p className='mb-1'>Posted: <span className='font-semibold'>{postTime}</span></p>
            <p className='flex gap-2'>Seller: <span className='font-semibold flex gap-3'>{sellersName} {productDetails.verify === "Verified" ? <div className='flex gap-1 items-center'><img className='w-5 h-5' src={Verified} alt="" /> <p>Seller Verified</p></div> : <p>Seller Not Verified</p>}</span></p>
            <label htmlFor="booking-modal" className="btn btn-primary w-full text-white mt-10">Book Now</label>
        </div>
    );
};

export default CategoryProductDisplay;