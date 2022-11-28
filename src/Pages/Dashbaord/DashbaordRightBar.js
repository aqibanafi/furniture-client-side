import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { RevolvingDot } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DashbaordRightBar = () => {

    //Import Auth Context
    const { user, logOut } = useContext(AuthContext)

    const navigate = useNavigate()

    const { data = [], isLoading } = useQuery({
        queryKey: ['sellersInfo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

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
        <div className='bg-primary p-5'>
            <div className='mb-10'>
                <img className='rounded-lg w-96' src={user?.photoURL} alt="" />
            </div>
            <div>
                <p className='text-white font-bold mb-2'><span className='text-lg mr-2'>User Name:</span> <span className='text-yellow-600 text-lg lg:text-2xl'>{user?.displayName}</span></p>
                <p className='text-white font-bold mb-2'><span className='text-lg mr-2'>Email:</span> <span className='text-yellow-600 text-xl'>{user?.email}</span></p>
                <p className='text-white font-bold mb-2'><span className='text-lg mr-2'>Location:</span> <span className='text-yellow-600 text-xl'>{data.location}</span></p>
                <p className='text-white font-bold'><span className='text-lg mr-2'>Role:</span> <span className='text-green-600 text-xl'>{data.role}</span></p>
            </div>
            <div className='mt-10'>
                <button onClick={handleLogOut} className='btn bg-red-600 hover:bg-red-800 w-full text-white font-bold'>Logout</button>
            </div>
        </div>
    );
};

export default DashbaordRightBar;