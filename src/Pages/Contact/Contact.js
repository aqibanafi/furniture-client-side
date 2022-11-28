import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {

    //Form handle Functions
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = event => {
        event.preventDefault()
        toast.success("Your Message is received")
    }
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold text-primary mb-10'>Contact us</h1>
            </div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className='flex justify-center items-center'>
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Fake address, 9999 City</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>contact@business.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className='p-10'>
                        <div className="w-full mb-5">
                            <label className="block text-sm mb-1">Full Name</label>
                            <input {...register("name", { required: true })} type="text" placeholder="John Sina" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className='w-full mb-5'>
                            <label className="block text-sm mb-1">Location</label>
                            <input {...register("location", { required: true })} type="text" placeholder="New York, USA" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                        </div>
                        <div className='w-full mb-5'>
                            <label className="block text-sm mb-1">Email address</label>
                            <input {...register("email", { required: true })} type="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className='w-full mb-5'>
                            <label className="block text-sm mb-1">Account Type</label>
                            <select {...register("profileType", { required: true })} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
                                <option selected>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <div className='w-full mb-8'>
                            <label className="block text-sm mb-2">Message</label>
                            <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full py-5 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" placeholder="Your Message"></textarea>
                        </div>
                        <div className='mt-10 flex justify-center'>
                            <input className='btn btn-active bg-slate-400 border-0 w-full hover:bg-white hover:text-black text-white' type="submit" value='Send Message' />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;