import React from 'react';
import Lottie from "lottie-react";
import reader from '../../assets/lottie/83124-talk.json'

const LetsTalk = () => {

    const handletalk = () => {
        const Swal = require('sweetalert2')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Confirm Request',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div className='mt-20'>
            <div className="grid grid-cols-1 gap-12 px-8 py-16 mx-auto rounded-lg items-center md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-slate-700 text-black">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-5xl text-white font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className=" text-white">Share what you want to say...</div>
                    </div>
                    <div>
                        <Lottie animationData={reader} loop={true}></Lottie>
                    </div>
                </div>
                <form className="space-y-6">
                    <div>
                        <label for="name" className="text-sm text-white">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-slate-100" />
                    </div>
                    <div>
                        <label for="email" className="text-sm text-white">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-slate-100" />
                    </div>
                    <div>
                        <label for="message" className="text-sm text-white">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-slate-1000"></textarea>
                    </div>
                    <button onClick={handletalk} type="button" className="px-12 py-3 font-semibold rounded bg-primary text-white hover:bg-slate-500">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default LetsTalk;