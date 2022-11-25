import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyWishListDisplay from '../MyWishListDisplay/MyWishListDisplay';

const MyWishList = () => {
    const {data = []} = useQuery({
        queryKey: ['myWishList'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/wishlist')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-primary'>My Wishlist</h1>
            <div>
                {
                    data.map(wishList => <MyWishListDisplay wishList={wishList}></MyWishListDisplay>)
                }
            </div>
        </div>
    );
};

export default MyWishList;