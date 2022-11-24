import React from 'react';

const CategoryCourseDisplay = ({courseDetails}) => {

    //Distructure Property
    const {name, picture, location, resealablePrice, originalPrice, yearOfUse, postTime, sellersName} = courseDetails;
    return (
        <div>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>{sellersName}</p>
        </div>
    );
};

export default CategoryCourseDisplay;