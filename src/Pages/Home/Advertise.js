import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AdvertiseDisplay from './AdvertiseDisplay';
import { RevolvingDot } from 'react-loader-spinner'
import AdvertiseModal from './AdvertiseModal';
import axios from 'axios';

const Advertise = () => {

    const [advertiseData, setAdvertiseData] = useState([])

    useEffect(() => {
        axios.get('https://the-personal.vercel.app/advertise')
            .then(res => setAdvertiseData(res.data))
    }, [])

    const [avdertiseProduct, setAdvertiseProduct] = useState([])

    if (!advertiseData) {
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
                        advertiseData.map(advertise => <AdvertiseDisplay setAdvertiseProduct={setAdvertiseProduct} advertiseProduct={advertise}></AdvertiseDisplay>)
                    }
                </div>
                <div>
                    <AdvertiseModal avdertiseProduct={avdertiseProduct}></AdvertiseModal>
                </div>
            </div>

        </div>

    );
};

export default Advertise;