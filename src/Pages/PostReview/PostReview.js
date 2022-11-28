import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/review-arrow.png';

const PostReview = () => {

    const { user } = useContext(AuthContext)
    //Review Count State
    const [reviewStar, setReviewStar] = useState(0)

    //States For Setting Review Star Color
    const [starOneStarColor, setStarOneStarColor] = useState("text-gay-500")
    const [starTwoStarColor, setStarTwoStarColor] = useState("text-gay-500")
    const [starThreeStarColor, setStarThreeStarColor] = useState("text-gay-500")
    const [starFourStarColor, setStarFourStarColor] = useState("text-gay-500")
    const [starFiverStarColor, setStarFiverStarColor] = useState("text-gay-500")

    //Review Star Disable
    const [count, setCount] = useState(0)

    //Button To Post New Review
    const handlePostReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const message = event.target.message.value;

        //Create Object To Post Data
        const review = {
            name,
            email,
            date: new Date(),
            image,
            message,
            ratingComment: `${reviewStar === 1 ? "Poor" : reviewStar === 2 ? "Below Average" : reviewStar === 3 ? "Average" : reviewStar === 4 ? "Good" : reviewStar === 5 ? "Excellent" : ""}`,
            rating: reviewStar,
        }
        console.log(review)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                if (data.acknowledged) {
                    toast.success("Your Review is Submitted Successfully")
                }
            })
            .catch(error => console.error(error))
    }

    //All Functions To Get Value For Posting Review
    const handleGetReviewOne = () => {
        const starValue = [1]
        setReviewStar(...starValue)
        setCount(1)

    }
    const handleGetReviewTwo = () => {
        const starValue = [2]
        setReviewStar(...starValue)
        setCount(2)
    }
    const handleGetReviewThree = () => {
        const starValue = [3]
        setReviewStar(...starValue)
        setCount(3)

    }
    const handleGetReviewFour = () => {
        const starValue = [4]
        setReviewStar(...starValue)
        setCount(4)

    }
    const handleGetReviewFive = () => {
        const starValue = [5]
        setReviewStar(...starValue)
        setCount(5)

    }
    return (
        <div>
            <div className='container mx-auto mt-20'>
                {
                    user ?
                        <div className="flex flex-col justify-center w-full p-8 rounded-xl lg:p-12 border shadow-xl dark:text-black">
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-center text-3xl font-bold text-primary">Submit Your Valuable Feedback</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was your experience?</span>
                                    <div>
                                        <p className='text-xl font-bold text-orange-500'>
                                            {
                                                reviewStar === 1 ? "Poor" : reviewStar === 2 ? "Below Average" : reviewStar === 3 ? "Average" : reviewStar === 4 ? "Good" : reviewStar === 5 ? "Excellent" : ""
                                            }
                                        </p>
                                    </div>
                                    <div className="flex space-x-3">
                                        <button onClick={() => handleGetReviewOne(`${setStarOneStarColor("text-yellow-500")}`)} className={`${starOneStarColor}`} disabled={count !== 0} type="button" name="one" title="Rate 1 stars" aria-label="Rate 1 stars">
                                            <FaStar className='text-4xl'></FaStar>
                                        </button>
                                        <button onClick={() => handleGetReviewTwo(`${setStarTwoStarColor("text-yellow-500")}`)} className={`${starTwoStarColor}`} disabled={count !== 1} type="button" title="Rate 2 stars" name="2" aria-label="Rate 2 stars">
                                            <FaStar className='text-4xl'></FaStar>
                                        </button>
                                        <button onClick={() => handleGetReviewThree(`${setStarThreeStarColor("text-yellow-500")}`)} className={`${starThreeStarColor}`} disabled={count !== 2} type="button" title="Rate 3 stars" name="3" aria-label="Rate 3 stars">
                                            <FaStar className='text-4xl'></FaStar>
                                        </button>
                                        <button onClick={() => handleGetReviewFour(`${setStarFourStarColor("text-yellow-500")}`)} className={`${starFourStarColor}`} disabled={count !== 3} type="button" title="Rate 4 stars" name="four" aria-label="Rate 4 stars">
                                            <FaStar className='text-4xl'></FaStar>
                                        </button>
                                        <button onClick={() => handleGetReviewFive(`${setStarFiverStarColor("text-yellow-500")}`)} className={`${starFiverStarColor}`} disabled={count !== 4} type="button" title="Rate 5 stars" name="five" aria-label="Rate 5 stars">
                                            <FaStar className='text-4xl'></FaStar>
                                        </button>
                                    </div>
                                    <div>
                                        <Link to='/'><p className='text-sm'>Not Now</p></Link>
                                    </div>
                                </div>
                                <form onSubmit={handlePostReview}>
                                    <div className="flex flex-col w-full">
                                        <textarea disabled={count === 0} rows="3" name="message" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-black border shadow-2xl mb-5"></textarea>
                                        <button type="submit" className="btn px-32 mb-3 text-white bg-primary hover:bg-gray-600 border-0">Post Feedback</button>
                                    </div>
                                    {/* <div>
                                            <DateTimePicker onChange={onChange} value={value} />
                                        </div> */}
                                </form>
                            </div>
                        </div>
                        :
                        <div className='flex flex-wrap items-center gap-3 justify-center'>
                            <p className='text-3xl font-medium'>Please</p>
                            <div className='flex items-center gap-3'>
                                <img className='w-10 h-10' src={arrow} alt="" />
                                <Link to='/login' className='text-4xl font-bold hover:text-slate-600'>Login</Link>
                            </div>
                            <p className='text-3xl font-medium'>to post review</p>
                        </div>
                }
            </div>
            <div></div>
        </div>
    );
};

export default PostReview;