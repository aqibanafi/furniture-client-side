import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import DashbaordLeftBar from '../../Pages/Dashbaord/DashbaordLeftBar';
import DashbaordRightBar from '../../Pages/Dashbaord/DashbaordRightBar';

const DashboardLayout = () => {
    //Import Auth Context
    const { user } = useContext(AuthContext)
    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-3xl text-center font-bold'>Welcome, <span className='text-4xl text-green-600'>{user?.displayName}</span> to Your Dashbaord</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-9 lg:grid-cols-12 gap-10 mt-20'>
                <div className='col-span-2'>
                    <DashbaordLeftBar></DashbaordLeftBar>
                </div>
                <div className='col-span-7'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-8 md:col-span-10 lg:col-span-3'>
                    <DashbaordRightBar></DashbaordRightBar>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;