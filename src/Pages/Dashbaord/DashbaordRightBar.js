import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const DashbaordRightBar = () => {

    //Import Auth Context
    const {user} = useContext(AuthContext)

    const { data = [], refetch } = useQuery({
        queryKey: ['sellersInfo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })


    return (
        <div className='bg-primary p-5'>
            <div className='mb-10'>
                <img className='rounded-lg' src={user?.photoURL} alt="" />
            </div>
            <div>
                <p className='text-white font-bold mb-2'><span className='text-lg mr-2'>User Name:</span> <span className='text-yellow-600 text-lg lg:text-2xl'>{user?.displayName}</span></p>
                <p className='text-white font-bold mb-2'><span className='text-lg mr-2'>Email:</span> <span className='text-yellow-600 text-xl'>{user?.email}</span></p>
                <p className='text-white font-bold mb-2'><span className='text-lg mr-2'>Location:</span> <span className='text-yellow-600 text-xl'>{data.location}</span></p>
                <p className='text-white font-bold'><span className='text-lg mr-2'>Role:</span> <span className='text-green-600 text-xl'>{data.role}</span></p>
            </div>
            <div className='mt-10'>
                <button className='btn btn-warning w-full text-white font-bold'>Edit Profile</button>
            </div>
        </div>
    );
};

export default DashbaordRightBar;