import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllSellersDisplay from '../AllSellersDisplay/AllSellersDisplay';

const AllSellers = () => {

    const { data = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = await res.json();
            return data;
        }
    })


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