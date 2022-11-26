import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourseDisplay from '../CategoryCourseDisplay/CategoryCourseDisplay';
import FlagModal from '../CategoryCourseDisplay/FlagModal';
import Modal from '../CategoryCourseDisplay/Modal';

const CategoryCourses = () => {

    //Data Load By Use Loader
    const data = useLoaderData()

    return (
        <div className='mt-10 mb-10'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-10'>{data.length} Products Available for Category { }</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        data.map(courseInfo => <CategoryCourseDisplay courseDetails={courseInfo}></CategoryCourseDisplay>)
                    }
                </div>
            </div>
            {
                data.map(courseInfo => <Modal courseDetails={courseInfo}></Modal>)
            }
            {
                data.map(courseInfo => <FlagModal courseDetails={courseInfo}></FlagModal>)
            }
        </div>
    );
};

export default CategoryCourses;