import React from 'react';
import { Outlet } from 'react-router-dom';
import DashbaordLeftBar from '../../Pages/Dashbaord/DashbaordLeftBar';
import DashbaordRightBar from '../../Pages/Dashbaord/DashbaordRightBar';

const DashboardLayout = () => {
    return (
        <div className='grid grid-cols-12'>
        <div className='col-span-2'>
            <DashbaordLeftBar></DashbaordLeftBar>
        </div>
        <div className='col-span-7'>
            <Outlet></Outlet>
        </div>
        <div className='col-span-3'>
            <DashbaordRightBar></DashbaordRightBar>
        </div>
    </div>
    );
};

export default DashboardLayout;