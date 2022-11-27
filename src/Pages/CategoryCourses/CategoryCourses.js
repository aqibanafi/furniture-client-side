import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourseDisplay from '../CategoryCourseDisplay/CategoryCourseDisplay';
import FlagModal from '../CategoryCourseDisplay/FlagModal';
import Modal from '../CategoryCourseDisplay/Modal';
import { RevolvingDot } from 'react-loader-spinner'

const CategoryCourses = () => {

    //Data Load By Use Loader
    const data = useLoaderData()

    const [productBooked, setProductBooked] = useState([])

    if (!data) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

    return (
        <div className='mt-10 mb-10'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-10'>{data.length} Products Available for this category</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        data.map(courseInfo => <CategoryCourseDisplay setProductBooked={setProductBooked} courseDetails={courseInfo}></CategoryCourseDisplay>)
                    }
                </div>
            </div>
            {
                data.map(courseInfo => <Modal productBooked={productBooked} courseDetails={courseInfo}></Modal>)
            }
            {
                data.map(courseInfo => <FlagModal courseDetails={courseInfo}></FlagModal>)
            }
        </div>
    );
};

export default CategoryCourses;