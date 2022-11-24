import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Modal = ({ courseDetails }) => {

    //Import Auth Context
    const { user } = useContext(AuthContext)

    //Date
    const date = new Date()
    const formateDate = format(date, 'PP');

    //Distructure Property
    const { name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName } = courseDetails;

    //Handle Submit Button
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const bookingItem = name;
        const customerName = user?.name;
        const customerEmail = user?.email;
        const furniturePrice = resealablePrice;
        const phoneNumber = form.phone.value;
        const meetingLocation = form.meetLocation.value;

        const booking = {
            bookingItem,
            customerName,
            customerEmail,
            furniturePrice,
            phoneNumber,
            meetingLocation,
            date: formateDate
        }
        fetch('http://localhost:5000/bookingdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                toast.success("Your Booking is Received")
            }
        })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleBooking}>
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
                            <input type="text" name='phone' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className='w-full mb-2'>
                            <label className="block text-sm mb-1">Meeting Location</label>
                            <input type="text" name='meetLocation' className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div>
                            <input htmlFor="booking-modal" className="btn bg-primary mt-10 w-full text-white" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;