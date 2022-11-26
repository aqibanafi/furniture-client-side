import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import AllBuyersDisplay from '../AllBuyersDisplay/AllBuyersDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const AllBuyers = () => {

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }
    const [deleteProduct, setDeleteProducts] = useState(data)

    return (
        <div>
            <h1 className='text-3xl font-bold text-primary mb-10 text-center'>All Buyers ({data.length})</h1>
            <div>
                {
                    data.map(buyers => <AllBuyersDisplay deleteProduct={deleteProduct} setDeleteProducts={setDeleteProducts} refetch={refetch} buyerInfo={buyers}></AllBuyersDisplay>)
                }
            </div>
        </div>
    );
};

export default AllBuyers;