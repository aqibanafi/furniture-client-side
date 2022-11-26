import React from 'react';
import { Link } from 'react-router-dom';
import reader from '../../assets/lottie/error.json'
import Lottie from "lottie-react";

const ErrorPage = () => {

    return (
        <div className='mt-20 mb-20'>
            <section className="flex items-center h-full p-16  dark:text-black">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <div className='mb-10'>
                            <Lottie animationData={reader} loop={true}></Lottie>
                        </div>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' className="px-8 py-3 font-semibold rounded bg-primary text-white font-bold">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;