import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {

    const { data = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            {
                data.length &&
                <Advertise></Advertise>
            }
        </div>
    );
};

export default Home;