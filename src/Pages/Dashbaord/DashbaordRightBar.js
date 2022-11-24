import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const DashbaordRightBar = () => {

    //Import Auth Context
    const {user} = useContext(AuthContext)
    return (
        <div className='bg-primary'>
            <div>
                <img src={user?.photoURL} alt="" />
            </div>
            <div>
                <button className='btn btn-secondary text-white font-bold'>Edit Profile</button>
            </div>
        </div>
    );
};

export default DashbaordRightBar;