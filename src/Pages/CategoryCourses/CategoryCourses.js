import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCourseDisplay from '../CategoryCourseDisplay/CategoryCourseDisplay';

const CategoryCourses = () => {

    //Data Load By Use Loader
    const data = useLoaderData()
console.log(data)
    return (
        <div>
            {
                data.map(courseInfo => <CategoryCourseDisplay courseDetails={courseInfo}></CategoryCourseDisplay>)
            }
        </div>
    );
};

export default CategoryCourses;