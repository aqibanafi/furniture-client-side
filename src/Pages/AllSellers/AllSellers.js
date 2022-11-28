import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllSellersDisplay from '../AllSellersDisplay/AllSellersDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const AllSellers = () => {

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://the-personal.vercel.app/sellers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('thePersonal')}`
                    }
                })
                const data = await res.json();
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
            <h1 className='text-3xl font-bold text-primary mb-10 text-center'>All Sellers ({data.length})</h1>
            {
                data.map(seller => <AllSellersDisplay deleteProduct={deleteProduct} setDeleteProducts={setDeleteProducts} refetch={refetch} buyerInfo={seller}></AllSellersDisplay>)
            }
        </div>
    );
};

export default AllSellers;