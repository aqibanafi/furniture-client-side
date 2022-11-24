import React, { useContext } from 'react';
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
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import myproduct from '../../assets/icons/myproducts.png'

const DashbaordLeftBar = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)

    const menuOptions =
        <div className='bg-primary text-white flex flex-col gap-10 justify-center items-center p-10'>
            <Link to='/'><img className='w-10' src={home} alt="" /></Link>
            <Link><img className='w-10' src={user} alt="" /></Link>
            <Link><img className='w-10' src={message} alt="" /></Link>
            <Link><img className='w-10' src={settings} alt="" /></Link>
            <Link><img className='w-10' src={help} alt="" /></Link>

            {
                isAdmin &&
                <>
                    <Link><img className='w-10' src={buyer} alt="" /></Link>
                    <Link><img className='w-10' src={seller} alt="" /></Link>
                    <Link><img className='w-10' src={report} alt="" /></Link>
                </>
            }
            {
                isBuyer &&
                <>
                    <Link to='/dashbaord/myorders/'><img className='w-10' src={checkout} title='My Orders' alt="" /></Link>
                    <Link><img className='w-10' src={wishlist} title='My Wishlist' alt="" /></Link>
                </>
            }
            {
                isSeller &&
                <>
                    <Link to='/dashbaord/addproduct/'><img className='w-10' src={addproduct} title='Add Product' alt="" /></Link>
                    <Link><img className='w-10' src={myproduct} title='My Products' alt="" /></Link>
                </>
            }
        </div>

    return (
        <div>
            {menuOptions}
        </div>
    );
};

export default DashbaordLeftBar;