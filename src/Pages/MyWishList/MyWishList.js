import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyWishListDisplay from '../MyWishListDisplay/MyWishListDisplay';
import { RevolvingDot } from 'react-loader-spinner'
import MyWishModal from './MyWishModal';

const MyWishList = () => {

    const { user } = useContext(AuthContext)

    const [myWishList, setMyWishList] = useState([])

    const { data = [], isLoading } = useQuery({
        queryKey: ['myWishList'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

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
                    data.map(wishList => <MyWishListDisplay wishList={wishList} setMyWishList={setMyWishList}></MyWishListDisplay>)
                }
            </div>
            <div>
                <MyWishModal myWishList={myWishList} ></MyWishModal>
            </div>
        </div>
    );
};

export default MyWishList;