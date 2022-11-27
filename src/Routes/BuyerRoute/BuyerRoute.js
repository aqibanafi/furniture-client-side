import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { RevolvingDot } from 'react-loader-spinner'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
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

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;