import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import EditProduct from '../EditProduct/EditProduct';
import MyProductsDisplay from '../MyProductsDisplay/MyProductsDisplay';

const MyProducts = () => {

    //Import Auth Context
    const { user } = useContext(AuthContext)

    const { data = [] } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
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