import React from 'react';
import Container from '../Container/Container';
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className='bg-[#09090B]'>

                <Container>

                    <footer className="footer bg-[#09090B] sm:footer-horizontal text-white p-10">
                        <aside className='text-center'>
                            <img src={Logo} className='grayscale w-16 mx-auto' alt="" />
                            <p className='text-3xl font-bold'>
                                HERO.IO
                            </p>
                        </aside>
                        <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </footer>

                    <p className='text-center text-gray-400'><small>Copyright © 2025 - All  right reserved</small></p>
                </Container>
            </div>

        </>
    );
};

export default Footer;