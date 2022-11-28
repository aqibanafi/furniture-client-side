import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";

const EditProfileDisplay = ({ product }) => {

    const { user } = useContext(AuthContext)
    const email = user?.email;

    //Distructure Property
    const { name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName, _id } = product;


    //Handle Edit Products

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const name = data.productname;
        const location = data.location;
        const resealablePrice = data.resealablePrice;
        const originalPrice = data.originalPrice;
        const yearOfUse = data.yearOfUse;
        const postTime = data.postTime;
        const sellersName = data.sellersName;

        const products = {
            name,
            email,
            picture,
            location,
            resealablePrice,
            originalPrice,
            yearOfUse,
            postTime,
            sellersName
        }
        fetch(`https://the-personal.vercel.app/myproducts/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('thePersonal')}`
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product Successfully Edited")
                }
            })

    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-primary mb-10'>Edit Your Product</h1>
            <div className='w-full bg-slate-100 p-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("productname", { required: true })} type="text" name='productname' defaultValue={name} className="input input-bordered w-full mb-5" />
                    <input {...register("location", { required: true })} type="text" name='location' defaultValue={location} className="input input-bordered w-full mb-5" />
                    <input {...register("resealablePrice", { required: true })} type="text" name='resealablePrice' defaultValue={resealablePrice} className="input input-bordered w-full mb-5" />
                    <input {...register("originalPrice", { required: true })} type="text" name='originalPrice' defaultValue={originalPrice} className="input input-bordered w-full mb-5" />
                    <input {...register("yearOfUse", { required: true })} type="text" name='yearOfUse' defaultValue={yearOfUse} className="input input-bordered w-full mb-5" />
                    <input {...register("postTime", { required: true })} type="text" name='postTime' defaultValue={postTime} className="input input-bordered w-full mb-5" />
                    <input {...register("sellersName", { required: true })} type="text" name='sellersName' defaultValue={sellersName} className="input input-bordered w-full mb-5" />
                    <input className='btn' type="submit" value='Edit' />
                </form>
            </div>
        </div>
    );
};

export default EditProfileDisplay;