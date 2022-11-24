import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourseDisplay from '../CategoryCourseDisplay/CategoryCourseDisplay';

const CategoryCourses = () => {

    //Data Load By Use Loader
    const data = useLoaderData()

    return (
        <div>
            <div>
                <h1>{data.length} Products Available for Category {}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data.map(courseInfo => <CategoryCourseDisplay courseDetails={courseInfo}></CategoryCourseDisplay>)
                }
            </div>
        </div>
    );
};

export default CategoryCourses;