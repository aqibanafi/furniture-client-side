import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Modal = ({ courseDetails }) => {

    //Import Auth Context
    const { user } = useContext(AuthContext)

    //Distructure Property
    const { name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName } = courseDetails;

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form>
                        <h3 className="font-bold text-lg mb-5 text-center">Booking: {name}</h3>
                        <div className='w-full mb-2'>
                            <label className="block text-sm mb-1">Customer Name</label>
                            <input type="text" defaultValue={user?.displayName} readOnly className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className='w-full mb-2'>
                            <label className="block text-sm mb-1">Customer Email</label>
                            <input type="text" defaultValue={user?.email} readOnly className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className='w-full mb-2'>
                            <label className="block text-sm mb-1">Price</label>
                            <input type="text" defaultValue={resealablePrice} readOnly className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className='w-full mb-2'>
                            <label className="block text-sm mb-1">Phone Number</label>
                            <input type="text" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className='w-full mb-2'>
                            <label className="block text-sm mb-1">Meeting Location</label>
                            <input type="text" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;