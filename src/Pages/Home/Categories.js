import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesDisplay from './CategoriesDisplay';

const Categories = () => {
    const { data = [] } = useQuery({
        queryKey: ['categoryList'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories/')
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold text-center mb-10'>CATEGORIES</h1>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                    {
                        data.map(category => <CategoriesDisplay categoryItem={category}></CategoriesDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;