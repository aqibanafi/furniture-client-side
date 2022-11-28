import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyOrdersDisplay from '../MyOrdersDisplay/MyOrdersDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data = [], isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/myorders/${user?.email}`, {
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

    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center font-bold text-primary mb-20'>My Orders ({data.length})</h1>
            </div>
            <div>
                {
                    data.length === 0 && <h1 className='text-xl text-center text-red-600 font-bold text-primary mb-20'>You did not make any order</h1>
                }
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