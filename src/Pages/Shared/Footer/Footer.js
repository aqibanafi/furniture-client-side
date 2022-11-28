import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/logo.png'

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='mb-3' src={Logo} alt="" />
                    <p><span className='text-lg font-semibold'>The Personal</span><br />Providing reliable service since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/blogs'>Blog</Link>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;