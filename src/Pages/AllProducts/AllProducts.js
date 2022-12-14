import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllProductsDisplay from '../AllProductsDisplay/AllProductsDisplay';
import { RevolvingDot } from 'react-loader-spinner'
import useTitle from '../../hooks/useTitle';

const AllProducts = () => {

    useTitle("All Products")
    
    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['allProduct'],
        queryFn: async () => {
            try {
                const res = await fetch('https://the-personal.vercel.app/allproducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('thePersonal')}`
                    }
                })
                const data = await res.json()
                return data;
            }
            catch (error) {
                console.error(error)
            }
        }
    })

    const [deleteProduct, setDeleteProducts] = useState(data)

    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-primary mb-10 text-center'>All Products ({data.length})</h1>
            <div>
                {
                    data.map(product => <AllProductsDisplay product={product} refetch={refetch} deleteProduct={deleteProduct} setDeleteProducts={setDeleteProducts}></AllProductsDisplay>)
                }
            </div>
        </div>
    );
};

export default AllProducts;