import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
// import { useLoaderData } from 'react-router';
import HomeApps from '../HomeApps/HomeApps';
// import { all } from 'axios';

const Home = () => {
    
    
    return (
        <div>
            <Hero />
            <Banner />
            <HomeApps />
        </div>
    );
};

export default Home;