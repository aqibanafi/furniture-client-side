import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/icons/house-black-silhouette-without-door.png'
import addproduct from '../../assets/icons/add-to-cart.png'
import buyer from '../../assets/icons/buyer.png'
import checkout from '../../assets/icons/checkout.png'
import help from '../../assets/icons/communication.png'
import message from '../../assets/icons/email.png'
import wishlist from '../../assets/icons/heart.png'
import report from '../../assets/icons/report.png'
import seller from '../../assets/icons/seller.png'
import settings from '../../assets/icons/settings.png'
import user from '../../assets/icons/user.png'


const DashbaordLeftBar = () => {

    const menuOptions =
        <div className='bg-primary text-white flex flex-col gap-10 justify-center items-center p-10'>
            <>
                <Link><img className='w-10' src={home} alt="" /></Link>
                <Link><img className='w-10' src={user} alt="" /></Link>
                <Link><img className='w-10' src={buyer} alt="" /></Link>
                <Link><img className='w-10' src={seller} alt="" /></Link>
                <Link><img className='w-10' src={message} alt="" /></Link>
                <Link><img className='w-10' src={report} alt="" /></Link>
                <Link><img className='w-10' src={settings} alt="" /></Link>
                <Link><img className='w-10' src={help} alt="" /></Link>
                <Link><img className='w-10' src={addproduct} alt="" /></Link>
                <Link><img className='w-10' src={checkout} alt="" /></Link>
                <Link><img className='w-10' src={wishlist} alt="" /></Link>
                

            </>
        </div>

    return (
        <div>
            {menuOptions}
        </div>
    );
};

export default DashbaordLeftBar;