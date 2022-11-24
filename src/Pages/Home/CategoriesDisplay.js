import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const CategoriesDisplay = ({ categoryItem }) => {

    const { name, image, icon, _id } = categoryItem;

    return (
        <div>
            <Link to={`/categories/${_id}`}>
                <div className='relative'>
                    <div className='carousel-img hover:scale-105 duration-500 ease-out'>
                        <img src={image} alt="" />
                    </div>
                    <div className='paragraph absolute z-10 bottom-[40%] left-[40%] flex flex-col gap-1 items-center'>
                        <img className='w-20 hover:scale-90 duration-300 ease-in' src={icon} alt="" />
                        <p className='text-white font-bold text-xl'>{name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesDisplay;