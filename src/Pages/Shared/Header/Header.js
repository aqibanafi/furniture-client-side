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
                localStorage.removeItem('thePersonal');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact font-bold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='hover:text-slate-400'>Home</Link></li>
                        <li><Link to='/blogs' className='hover:text-slate-400'>Blog</Link></li>
                        <li><Link to='/postreview' className='hover:text-slate-400'>Post Review</Link></li>
                        <li><Link to='/contact' className='hover:text-slate-400'>Contact</Link></li>
                        <li>
                            {
                                user?.email &&
                                <Link to='/dashbaord' className='hover:text-slate-400'>Dashboard</Link>
                            }
                        </li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to='/'><img src={Logo} alt="" /></Link>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">The Personal</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    <li><Link to='/' className='hover:text-slate-400'>Home</Link></li>
                    <li><Link to='/blogs' className='hover:text-slate-400'>Blog</Link></li>
                    <li><Link to='/postreview' className='hover:text-slate-400'>Post Review</Link></li>
                    <li><Link to='/contact' className='hover:text-slate-400'>Contact</Link></li>
                    <li>
                        {
                            user?.email &&
                            <Link to='/dashbaord' className='hover:text-slate-400'>Dashboard</Link>
                        }
                    </li>
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
                            <Link onClick={handleLogOut} className='btn btn-secondary hover:bg-slate-600'>Logout</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;