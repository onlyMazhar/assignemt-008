import React from 'react';
import Container from '../Container/Container';
import './Hero.css'
import Google from '../../assets/google play.svg'
import Apple from '../../assets/applePlayStore.svg'
import HeroImg from '../../assets/hero.png'


const Hero = () => {
    return (
        <div>
            <Container>
                <div className='text-center w-full md:w-6/12 mx-auto mt-8 md:mt-16'>
                    <h1 className='px-2  text-5xl md:text-7xl 2xl:text-8xl font-extrabold banner-font text-[#001931] '>We Build <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
                    <p className='text-[#627382] text-sm md:text-xl max-w-[620px] mx-auto my-4   px-2'>
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler,
                        smarter, and more exciting. Our goal is to turn your ideas into digital experiences
                        that truly make an impact.
                    </p>
                    <div className=' flex justify-center'>
                        <a href='https://play.google.com/' target="_blank">
                            <div className='  flex items-center btn p-6 border-gray-300'>
                                <img src={Google} alt="Google Play Store Icon" />
                                <p>Google Play</p>
                            </div>
                        </a>
                        <a href='https://www.apple.com/app-store/' target="_blank">
                            <div className=' items-center btn p-6 border-gray-300'>
                                <img src={Apple} alt="Google Play Store Icon" />
                                <p>App Store</p>
                            </div>
                        </a>
                    </div>
                </div >
                <div>
                    <img className='pt-10 mx-auto object-cover px-2 ' src={HeroImg} alt="Hero Sectin Image" />
                </div>
            </Container >
        </div >
    );
};

export default Hero;