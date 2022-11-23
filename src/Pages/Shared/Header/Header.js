import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    //Import Auth Context
    const { user, logOut } = useContext(AuthContext)

    //Navigate
    const navigate = useNavigate()

    //Handle Log Out 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error("You Have Logged Out")
                navigate('/')
                localStorage.removeItem('superkitch');
            })
            .catch(error => console.error(error))
    }

    const menuItems =
        <>
            <div className='flex gap-10'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/blog'><li>Blog</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                {
                    user?.email &&
                    <Link to='/dashbaord'><li>Dashbaord</li></Link>
                }
            </div>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>


                    <div className='flex items-center gap-5'>
                        <Link to='/'><img className='hidden lg:block' src={Logo} alt="" /></Link>
                        <Link to='/' className="text-primary font-bold text-xl">The Personal</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user?.email ?
                                <></>
                                :
                                <Link to='/login'><button className='btn btn-secondary'>Login</button></Link>
                        }
                    </div>
                    <div>
                        {
                            user?.email &&
                            <div>
                                <Link onClick={handleLogOut} className='btn btn-secondary'>Logout</Link>
                            </div>
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;