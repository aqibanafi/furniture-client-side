import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const FlagModal = ({ courseDetails }) => {

    const { name, _id, sellersName, picture } = courseDetails;

    //Handle Item Report
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const productId = _id;
        const productName = name;
        const productImage = picture;
        const seller = sellersName;
        const productQuality = data.selectQuality;
        const message = data.reportMessage;

        const reportProductInfo = {
            productId,
            productName,
            productImage,
            seller,
            productQuality,
            message
        }
        fetch('http://localhost:5000/reportedProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportProductInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                toast.success("Thanks For Your Feedback")
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="flag-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="flag-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex flex-col items-center'>
                        <h3 className="text-lg font-bold mb-10">Report Product: {name}</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                            <div className='w-full mb-5'>
                                <select {...register("selectQuality", { required: true }) } className="select w-full">
                                    <option disabled selected>Choose Quality</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Average</option>
                                    <option>Bad</option>
                                    <option>Not Recommended</option>
                                </select>
                            </div>
                            <textarea {...register("reportMessage", { required: true }) } className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
                            <div className='flex justify-center mt-10'>
                                <input className="btn btn-error" type="submit" value="Report" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlagModal;