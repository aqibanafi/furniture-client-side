import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react';
import reader from '../../assets/lottie/login.json';
import { format } from 'date-fns';
import arrow from '../../assets/icons/registration-arroe.png';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle("Login")

    //Import Auth Info
    const { signIn, resetPassword, googleProviderLogin } = useContext(AuthContext)

    //Date
    const date = new Date();
    const formateDate = format(date, 'PP')

    //Email State
    const [getEmail, setGetEmail] = useState(null)

    //Navigate and Location
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    //Form handle Functions
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;
        setGetEmail(data.email)
        const password = data.password;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
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
                        toast.success("Login Successful")
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => console.error(error))

    }

    //Handle Google Login
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignUp = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
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
                        toast.success("Login Successful")
                    })
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    date: formateDate,
                    image: user.photoURL,
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
                            navigate(from, { replace: true })
                        }
                    })

            })
            .catch(error => {
                console.error(error)
            })
    }

    //Handle Reset Password
    const handleResetPassword = () => {
        resetPassword(getEmail)
            .then(() => {
                toast.success("Password Reset Link Sent")
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-20 mb-20'>
            <div>
                <div className="w-full rounded-md shadow dark:bg-gray-900 dark:text-gray-100 p-5">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Login Here</h2>
                    <div className='flex gap-5 justify-center ml-10 lg:ml-40'>
                        <p>Don't have an account?</p>
                        <div className='flex items-center gap-2'>
                            <img className='w-10' src={arrow} alt="" />
                            <Link to='/registration' className='mt-3 font-bold hover:text-orange-500'>Registration here</Link>
                        </div>
                    </div>
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogleSignUp} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-400" />
                        <p className="px-3 dark:text-gray-400">OR</p>
                        <hr className="w-full dark:text-gray-400" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full mb-5'>
                            <label for="email" className="block text-sm mb-1">Email address</label>
                            <input {...register("email", { required: true })} type="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className='w-full mb-2'>
                            <label for="email" className="block text-sm mb-1">Password</label>
                            <input {...register("password", { required: true })} type="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div>
                            <Link onClick={handleResetPassword}><p className='text-gray-500 hover:text-amber-600'><small>Forget Password?</small></p></Link>
                        </div>
                        <div className='mt-10 flex justify-center'>
                            <input className='btn btn-active bg-slate-400 border-0 w-full hover:bg-white hover:text-black text-white' type="submit" value='Login' />
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
<button className="btn btn-active bg-primary border-0 px-20 hover:bg-black text-white" data-aos="zoom-in-down">Get Started</button>
export default Login;