import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseDisplay from './AdvertiseDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const Advertise = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }
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