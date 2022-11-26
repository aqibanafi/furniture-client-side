import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyWishListDisplay from '../MyWishListDisplay/MyWishListDisplay';

const MyWishList = () => {

    const{user} = useContext(AuthContext)

    const {data = []} = useQuery({
        queryKey: ['myWishList'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/wishlist/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-primary mb-10'>My Wishlist ({data.length})</h1>
            <div>
                {
                    data.length === 0 && <h1 className='text-xl text-center text-red-600 font-bold text-primary mt-20'>You did not add any product</h1>
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    data.map(wishList => <MyWishListDisplay wishList={wishList}></MyWishListDisplay>)
                }
            </div>
        </div>
    );
};

export default MyWishList;