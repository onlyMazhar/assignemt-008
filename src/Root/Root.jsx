import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import useApps from '../Hooks/useApps';
import Spinner from '../Components/Spinner/Spinner';

const Root = () => {
    const { loading } = useApps();
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                {
                    loading
                        ? <Spinner />
                        :
                        <div className='flex-1'>
                            <Outlet />
                        </div>
                }

                <Footer />
            </div>
        </>
    );
};

export default Root;