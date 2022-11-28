import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const CategoriesDisplay = ({ categoryItem }) => {

    const { name, image, icon, _id } = categoryItem;

    return (
        <div>
            <Link to={`/categories/${name}`}>
                <div className='relative hover:scale-105 duration-500 ease-out'>
                    <div className='carousel-img'>
                        <img src={image} alt="" />
                    </div>
                    <div className='paragraph absolute z-10 bottom-[50%] left-[40%] flex flex-col gap-1 items-center'>
                        <p className='text-white font-bold text-xl'>{name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesDisplay;