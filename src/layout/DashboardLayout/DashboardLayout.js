import { isAdmin } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/isAdmin';
import DashbaordLeftBar from '../../Pages/Dashbaord/DashbaordLeftBar';
import DashbaordRightBar from '../../Pages/Dashbaord/DashbaordRightBar';

const DashboardLayout = () => {

    const [getAdmin, setGetAdmin] = useState(null)

    const {user} = useContext(AuthContext)

   const {data} = useQuery({
    queryKey:['admin'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
        const data = res.json()
        setGetAdmin(data)
        return data;
    }
   })

    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'>
                <DashbaordLeftBar getAdmin={getAdmin}></DashbaordLeftBar>
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