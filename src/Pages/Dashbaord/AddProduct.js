import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddProduct = () => {

    useTitle("Add Product")

    //Import Auth
    const { user } = useContext(AuthContext);

    const { data: userVerify } = useQuery({
        queryKey: ['userVerification'],
        queryFn: async () => {
            const res = await fetch(`https://the-personal.vercel.app/seller/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    //Date
    const date = new Date();
    const formateDate = format(date, 'PP')

    //Navigate
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const productName = data.productName;
        const resaleablePrice = data.resaleablePrice;
        const orginalPrice = data.orginalPrice;
        const condition = data.condition;
        const phone = data.phone;
        const location = data.location;
        const sellerName = user?.displayName;
        const verify = userVerify.verify;
        const description = data.description;
        const yearOfUses = data.yearOfUse;
        const yearOfPurchase = data.purchaseYear;
        const category = data.productCategory;
        const formData = new FormData()
        formData.append('image', data.image[0])


        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const addProduct = {
                    picture: data.data.url,
                    name: productName,
                    category,
                    location: location,
                    resealablePrice: resaleablePrice,
                    originalPrice: orginalPrice,
                    yearOfUse: yearOfUses,
                    postTime: formateDate,
                    purchaseYear: yearOfPurchase,
                    sellersName: sellerName,
                    verify,
                    email: user?.email,
                    status: "Active",
                }
                console.log(addProduct)
                fetch('https://the-personal.vercel.app/addnewproduct', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('thePersonal')}`
                    },
                    body: JSON.stringify(addProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("Product Successfully Added!")
                            navigate('/dashbaord/myproducts')
                        }
                    })
            })
    }
    return (
        <div>
            <div className='p-10 shadow-xl bg-gray-300 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold text-center text-primary mb-10'>Add New Product</h1>
                    <div className="w-full mb-8">
                        <label className="block text-sm mb-2">Product Name</label>
                        <input {...register("productName", { required: true })} type="text" placeholder="Cabinet" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Select Category</label>
                        <select {...register("productCategory", { required: true })} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
                            <option selected>Select Category</option>
                            <option>Cabinet</option>
                            <option>Sofa</option>
                            <option>Lamp</option>
                            <option>Bed</option>
                            <option>Accessories</option>
                            <option>Chair</option>
                            <option>Dressing Table</option>
                        </select>
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Resaleable Price</label>
                        <input {...register("resaleablePrice", { required: true })} type="text" placeholder="25,000" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Original Price</label>
                        <input {...register("orginalPrice", { required: true })} type="text" placeholder="25,000" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Account Type</label>
                        <select {...register("condition", { required: true })} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
                            <option selected>Select Condition</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Phone Number</label>
                        <input {...register("phone", { required: true })} type="text" placeholder="017******" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Seller Name</label>
                        <input {...register("sellerName", { required: true })} type="text" value={user?.displayName} readOnly className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Year of Uses</label>
                        <input {...register("yearOfUse", { required: true })} type="text" placeholder="2" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Location</label>
                        <input {...register("location", { required: true })} type="text" placeholder="Dhaka" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Purchase Year</label>
                        <input {...register("purchaseYear", { required: true })} type="text" placeholder="2022" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className='w-full mb-8'>
                        <label className="block text-sm mb-2">Description</label>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full py-5 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" placeholder="Explain your product"></textarea>
                    </div>
                    <div>
                        <div className="p-4 bg-white bg-whtie m-auto rounded-lg mt-10">
                            <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                                <svg className="text-primary w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                <div className="input_field flex flex-col w-max mx-auto text-center">
                                    <label>
                                        <input {...register("image", { required: true })} className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
                                        <div className="text bg-primary text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-gray-500">Select</div>
                                    </label>
                                    <div className="title text-primary uppercase">or drop files here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center'>
                        <input className='bg-primary text-white font-bold px-20 py-4 btn hover:bg-gray-600 hover:text-white' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;