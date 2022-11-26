import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllSellersDisplay from '../AllSellersDisplay/AllSellersDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const AllSellers = () => {

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-primary mb-10 text-center'>All Sellers ({data.length})</h1>
            {
                data.map(seller => <AllSellersDisplay refetch={refetch} buyerInfo={seller}></AllSellersDisplay>)
            }
        </div>
    );
};

export default AllSellers;