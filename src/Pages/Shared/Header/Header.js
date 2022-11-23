import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png'

const Header = () => {
    const menuItems =
        <>
            <div className='flex gap-10'>
                <Link><li>Home</li></Link>
                <Link><li>Blog</li></Link>
                <Link><li>Contact</li></Link>
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
                    <button className='btn btn-secondary'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;