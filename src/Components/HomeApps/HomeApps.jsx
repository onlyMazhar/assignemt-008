import React from 'react';
import App from './App';
import Container from '../Container/Container';
import { Link } from 'react-router';

const HomeApps = ({ data }) => {
    // console.log(data)
    return (
        <>
            <Container>
                <div className='text-center my-20'>
                    <div className='text-center mb-10 space-y-4'>
                        <h3 className='text-5xl font-bold'>Trending Apps</h3>
                        <p>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2   xl:grid-cols-4 gap-8 p-8'>
                        {
                            data.map(app => <App app={app}></App>)
                        }
                    </div>
                    <Link to='/apps'>
                        <button className="btn  mx-auto text-white border none bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                            Show All
                        </button>
                    </Link>
                </div>
            </Container>

        </>

    );
};

export default HomeApps;