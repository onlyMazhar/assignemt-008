import React from 'react';
import Container from '../Container/Container';

const Banner = () => {
    return (
        <div className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
            <Container>
                <div className='text-white text-center py-16 md:py-20 '>
                    <div className='mb-10'>
                        <h3 className='text-2xl md:text-4xl font-bold px-2'>Trusted by Millions, Built for You</h3>
                    </div>
                    <div className='flex flex-col md:flex-row mx-auto justify-between w-8/12 gap-12'>
                        <div className=''>
                            <p className='font-light text-[#ffffff70]'>Total Downloads</p>
                            <p className='text-[62px] font-bold'>29.6M</p>
                            <p className='font-light text-[#ffffff70]'>21% more than last month</p>
                        </div> <div >
                            <p className='font-light text-[#ffffff70]'>Total Reviews</p>
                            <p className='text-[62px] font-bold'>906K</p>
                            <p className='font-light text-[#ffffff70]'>46% more than last month</p>
                        </div> <div >
                            <p className='font-light text-[#ffffff70]'>Active Apps</p>
                            <p className='text-[62px] font-bold'>132+</p>
                            <p className='font-light text-[#ffffff70]'>31 more will Launch</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Banner;