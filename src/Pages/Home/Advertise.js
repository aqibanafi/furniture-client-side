import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseDisplay from './AdvertiseDisplay';

const Advertise = () => {
    const { data = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-10'>Advertise Products</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        data.map(advertise => <AdvertiseDisplay advertiseProduct={advertise}></AdvertiseDisplay>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Advertise;