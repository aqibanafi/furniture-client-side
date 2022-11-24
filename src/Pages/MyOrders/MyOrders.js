import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyOrdersDisplay from '../MyOrdersDisplay/MyOrdersDisplay';

const MyOrders = () => {

    const { data = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/myorders')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center font-bold text-primary mb-20'>My Orders</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    data.map(orders => <MyOrdersDisplay order={orders}></MyOrdersDisplay>)
                }
            </div>
        </div>
    );
};

export default MyOrders;