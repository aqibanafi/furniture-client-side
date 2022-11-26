import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import AllBuyersDisplay from '../AllBuyersDisplay/AllBuyersDisplay';

const AllBuyers = () => {

    const { data = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json();
            return data;
        }
    })
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