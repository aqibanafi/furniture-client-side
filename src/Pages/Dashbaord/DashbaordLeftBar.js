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
import myproduct from '../../assets/icons/myproducts.png';
import allproducts from '../../assets/icons/allproducts.png';

const DashbaordLeftBar = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)

    const menuOptions =
        <div className='bg-primary text-white flex flex-col gap-10 justify-center items-center p-10'>
            <div className="tooltip font-bold text-white" data-tip="Home">
                <Link to='/'><img className='w-10' src={home} alt="" /></Link>
            </div>
            <div className="tooltip font-bold text-white" data-tip="Message">
                <Link to='/dashbaord/message'><img className='w-10' src={message} alt="" /></Link>
            </div>


            {
                isAdmin &&
                <>
                    <div className="tooltip font-bold text-white" data-tip="All Buyers">
                        <Link to='/dashbaord/allbuyers/'><img className='w-10' src={buyer} alt="" /></Link>
                    </div>
                    <div className="tooltip font-bold text-white" data-tip="All Sellers">
                        <Link to='/dashbaord/allsellers/'><img className='w-10' src={seller} alt="" /></Link>
                    </div>
                    <div className="tooltip font-bold text-white" data-tip="Reports">
                        <Link to='/dashbaord/reports/'><img className='w-10' src={report} alt="" /></Link>
                    </div>
                    <div className="tooltip font-bold text-white" data-tip="All Products">
                        <Link to='/dashbaord/allproducts'><img className='w-12' src={allproducts} alt="" /></Link>
                    </div>
                </>
            }
            {
                isBuyer &&
                <>
                    <div className="tooltip font-bold text-white" data-tip="My Orders">
                        <Link to='/dashbaord/myorders/'><img className='w-10' src={checkout} title='My Orders' alt="" /></Link>
                    </div>
                    <div className="tooltip font-bold text-white" data-tip="Wish List">
                        <Link to='/dashbaord/mywishlist/'><img className='w-10' src={wishlist} title='My Wishlist' alt="" /></Link>
                    </div>
                </>
            }
            {
                isSeller &&
                <>
                    <div className="tooltip font-bold text-white" data-tip="My Products">
                        <Link to='/dashbaord/myproducts'><img className='w-10' src={myproduct} title='My Products' alt="" /></Link>
                    </div>
                    <div className="tooltip font-bold text-white" data-tip="Add New Product">
                        <Link to='/dashbaord/addproduct/'><img className='w-10' src={addproduct} title='Add Product' alt="" /></Link>
                    </div>
                </>
            }
            <div className="tooltip font-bold text-white" data-tip="Settings">
                <Link><img className='w-10' src={settings} alt="" /></Link>
            </div>
            <div className="tooltip font-bold text-white" data-tip="Help">
                <Link><img className='w-10' src={help} alt="" /></Link>
            </div>


        </div>
    return (
        <div>
            {menuOptions}
        </div>
    );
};

export default DashbaordLeftBar;