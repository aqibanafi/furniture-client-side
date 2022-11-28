import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesDisplay from './CategoriesDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const Categories = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ['categoryList'],
        queryFn: async () => {
            const res = await fetch('https://the-personal.vercel.app/categories/')
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        if (isLoading) {
            <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        }
    }
    return (
        <div className='mt-20'>
            <h1 className='text-2xl font-bold text-center mb-10'>CATEGORIES</h1>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {
                        data.map(category => <CategoriesDisplay categoryItem={category}></CategoriesDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;