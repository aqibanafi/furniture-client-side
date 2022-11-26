import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllProductsDisplay from '../AllProductsDisplay/AllProductsDisplay';

const AllProducts = () => {
    const { data = [], refetch } = useQuery({
        queryKey: ['allProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allproducts')
            const data = await res.json()
            return data;
        }
    })

    const [deleteProduct, setDeleteProducts] = useState(data)

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