import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RevolvingDot } from 'react-loader-spinner'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <div className='flex justify-center mt-40 mb-40'>
            <RevolvingDot
                height="100"
                width="100"
                radius="40"
                color="#062037"
                secondaryColor=''
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;