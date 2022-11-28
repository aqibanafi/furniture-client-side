import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import Lottie from "lottie-react";
import reader from '../../assets/lottie/registration.json';
import arrow from '../../assets/icons/registration-arroe.png';

const Registration = () => {

    //Import Auth Context
    const { createUser, updateUserProfile, googleProviderLogin } = useContext(AuthContext)

    const { user, logOut } = useContext(AuthContext)

    //Navigate and Location
    const navigate = useNavigate()

    //Date
    const date = new Date();
    const formateDate = format(date, 'PP')

    //Form handle Functions
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [image, setImage] = useState()

    const onSubmit = data => {
        const userName = data.name;
        const location = data.location;
        const email = data.email;
        const password = data.password;
        const profileType = data.profileType;
        const appendimage = data.image[0];
        const formData = new FormData()
        formData.append('image', appendimage)


        //Use formData to Store Image into Image BB
        // const formData = new FormData()
        // formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                //Create User
                createUser(email, password)
                    .then(result => {
                        const user = result.user;
                        console.log(user)
                        handleUpdateUserProfile(userName, data.data.url)
                        const currentUser = {
                            email: user?.email
                        }
                        //Get JWT Token
                        fetch('https://the-personal.vercel.app/jwt', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(currentUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                localStorage.setItem('thePersonal', data.token)
                            })
                    })
                    .catch(error => console.error(error))
                const userInfo = {
                    name: userName,
                    email: email,
                    date: formateDate,
                    location: location,
                    image: data.data.url,
                    role: profileType,
                    verify: "Not Verified"
                }
                fetch('https://the-personal.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("User Created Successfully")
                            navigate('/')
                        }
                    })
            })
        //Handle Update User Profile 
        const handleUpdateUserProfile = (name, photo) => {
            const profile = {
                displayName: name,
                photoURL: photo
            }
            console.log(profile)
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error))
        }
    }
    //Handle Google Login
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignUp = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const image = user.photoURL;
                const currentUser = {
                    email: user?.email
                }
                //Get JWT Token
                fetch('https://the-personal.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('thePersonal', data.token)
                    })
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    date: formateDate,
                    image,
                    role: 'Buyer'
                }
                fetch('https://the-personal.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("User Created Successfully")
                            navigate('/')
                        }
                    })

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-20 mb-20'>
            <div>
                <div className="w-full rounded-md shadow dark:bg-gray-900 dark:text-gray-100 p-5">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Registration Here</h2>
                    <div className='flex gap-5 justify-center ml-28'>
                        <p>Do you have an account?</p>
                        <div className='flex items-center gap-2'>
                            <img className='w-10' src={arrow} alt="" />
                            <Link to='/login' className='mt-3 font-bold hover:text-orange-500'>Login here</Link>
                        </div>
                    </div>
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogleSignUp} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Registration with Google</p>
                        </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-400" />
                        <p className="px-3 dark:text-gray-400">OR</p>
                        <hr className="w-full dark:text-gray-400" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            <label className="block text-sm mb-1">Password</label>
                            <input {...register("password", { required: true })} type="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className='w-full mb-5'>
                            <label className="block text-sm mb-1">Account Type</label>
                            <select {...register("profileType", { required: true })} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400">
                                <option selected>Buyer</option>
                                <option>Seller</option>
                            </select>
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
                            <input className='btn btn-active bg-slate-400 border-0 w-full hover:bg-white hover:text-black text-white' type="submit" value='Registration' />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Lottie animationData={reader} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Registration;