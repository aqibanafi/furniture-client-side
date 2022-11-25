import React from 'react';
import { Link } from 'react-router-dom';
import Taka from '../../assets/icons/taka.png'

const MyProductsDisplay = ({ products }) => {

    //Distructure Property
    const { name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName, _id } = products;

    
    return (
        <div className='shadow-xl p-10 rounded-lg bg-accent w-[400px]'>
            <img className='w-80 mb-5 rounded-xl' src={picture} alt="" />
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-semibold text-primary mb-5'>{name}</p>
                <button className='bg-green-500 px-5 py-2 text-white'>Available</button>
            </div>
            <p className='mb-1'>Location: <span className='font-semibold'>{location}</span></p>
            <p className='flex mb-1'>Resale Price: <span className='flex items-center ml-2 font-semibold'>{resealablePrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='flex mb-1'>Original Price: <span className='flex items-center ml-2 font-semibold'>{originalPrice} <img className='w-5 h-5' src={Taka} alt="" /></span></p>
            <p className='mb-1'>Year of Uses: <span className='font-semibold'>{yearOfUse}</span></p>
            <p className='mb-1'>Posted: <span className='font-semibold'>{postTime}</span></p>
            <p>Seller Name: <span className='font-semibold'>{sellersName}</span></p>
            <div className='flex gap-10 mt-10'>
                <Link to='/dashbaord/editproduct/'><button className="btn btn-active">Edit</button></Link>
                <button className="btn btn-success">Advertise</button>
                <button className="btn btn-error">Delete</button>

            </div>
        </div>
    );
};

export default MyProductsDisplay;