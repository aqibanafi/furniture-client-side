import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import EditProfileDisplay from '../EditProfileDisplay/EditProfileDisplay';

const EditProduct = () => {

    const { user } = useContext(AuthContext)

    const { data = [] } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            {
                data.map(products => <EditProfileDisplay product={products}></EditProfileDisplay>)
            }
        </div>
    );
};
export default EditProduct;