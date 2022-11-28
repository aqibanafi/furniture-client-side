import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import EditProfileDisplay from '../EditProfileDisplay/EditProfileDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const EditProduct = () => {

    const { user } = useContext(AuthContext)

    const { data = [], isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://the-personal.vercel.app/myproducts/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

    return (
        <div>
            {
                data.map(products => <EditProfileDisplay product={products}></EditProfileDisplay>)
            }
        </div>
    );
};
export default EditProduct;