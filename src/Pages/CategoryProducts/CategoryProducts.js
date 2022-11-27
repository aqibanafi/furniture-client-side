import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductDisplay from '../CategoryProductDisplay/CategoryProductDisplay';
import FlagModal from '../CategoryProductDisplay/FlagModal';
import Modal from '../CategoryProductDisplay/Modal';
import { RevolvingDot } from 'react-loader-spinner'

const CategoryProducts = () => {

    //Data Load By Use Loader
    const data = useLoaderData()

    if (!data) {
        <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    }

    return (
        <div className='mt-10 mb-10'>
            <div>
                <h1 className='text-center text-3xl font-bold mb-10'>{data.length} Products Available for Category { }</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        data.map(productInfo => <CategoryProductDisplay productDetails={productInfo}></CategoryProductDisplay>)
                    }
                </div>
            </div>
            {
                data.map(productInfo => <Modal productDetails={productInfo}></Modal>)
            }
            {
                data.map(productInfo => <FlagModal productDetails={productInfo}></FlagModal>)
            }
        </div>
    );
};

export default CategoryProducts;