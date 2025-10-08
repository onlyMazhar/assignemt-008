import React from 'react';
import { useLoaderData } from 'react-router';
import Container from '../../Components/Container/Container';
import SingleApp from './SingleApp/SingleApp';

const Apps = () => {
    const appData = useLoaderData()
    // console.log(appData)
    return (
        <div>
            <Container>
                <div className=' my-20 '>
                    <div className='text-center  space-y-3'>
                        <h3 className='text-5xl font-bold'>Our All Applications</h3>
                        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='text-2xl font-bold'>({appData.length}) Apps Found</h3>
                        </div>
                        <div>
                            <label className="input bg-transparent">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search Apps" />
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2   xl:grid-cols-4 gap-8 p-8'>
                        {
                            appData.map(app => <SingleApp app={app} />)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Apps;
