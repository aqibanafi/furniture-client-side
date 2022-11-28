import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyProductsDisplay from '../MyProductsDisplay/MyProductsDisplay';
import { RevolvingDot } from 'react-loader-spinner'
import useTitle from '../../hooks/useTitle';

const MyProducts = () => {

    useTitle("My Products")

    //Import Auth Context
    const { user } = useContext(AuthContext)

    const { data = [], isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://the-personal.vercel.app/myproducts/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-3xl mb-10'>My Products ({data.length})</h1>
            </div>
            {data.length === 0 && <p className='text-center font-bold text-4xl text-primary'>No Product Posted</p>}
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {
                    data.map(product => <MyProductsDisplay products={product}></MyProductsDisplay>)
                }
            </div>
        </div>
    );
};

export default MyProducts;