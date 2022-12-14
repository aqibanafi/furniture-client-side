import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Categories from './Categories';
import { RevolvingDot } from 'react-loader-spinner';
import ReviewDisplay from './ReviewDisplay';
import LetsTalk from './LetsTalk';
import useTitle from '../../hooks/useTitle';

const Home = () => {

    useTitle("Home")

    const { data = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://the-personal.vercel.app/advertise')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <div className='flex justify-center mt-40 mb-40'>
            <RevolvingDot height="100" width="100" radius="40" color="#062037" secondaryColor='' ariaLabel="revolving-dot-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            {
                data.length ?
                    <Advertise></Advertise>
                    :
                    " "
            }
            <div>
                <ReviewDisplay></ReviewDisplay>
            </div>
            <div>
                <LetsTalk></LetsTalk>
            </div>
        </div>
    );
};

export default Home;