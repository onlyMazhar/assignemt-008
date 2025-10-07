import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import HomeApps from '../HomeApps/HomeApps';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <Hero />
            <Banner />
            <HomeApps data={data} />
        </div>
    );
};

export default Home;