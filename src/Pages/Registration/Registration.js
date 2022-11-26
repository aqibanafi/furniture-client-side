import React, { useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const Registration = () => {

    //Import Auth Context
    const { createUser, updateUserProfile, googleProviderLogin } = useContext(AuthContext)

    //Store Name, Location, Email, ProfileType And Image for Database


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

                fetch('http://localhost:5000/users', {
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

                toast.success("You Have Successfully Logged in")
                const user = result.user;
                console.log(user);
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    date: formateDate,
                    image: image,
                    role: 'buyer'
                }
                fetch('http://localhost:5000/users', {
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
                        }
                    })

            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
        <div>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Registration Here</h2>
                <p className="text-sm text-center dark:text-gray-400">Do you have an account?
                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline ml-2">login here</Link>
                </p>
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
                        <label className="block text-sm mb-2">Upload Image</label>
                        <input {...register("image", { required: true })} type="file" />
                    </div>
                    <div className='mt-10 flex justify-center'>
                        <input className='bg-accent text-primary font-bold px-20 py-4 btn hover:bg-gray-600 hover:text-white' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;