import React from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import './Nav.css'
import logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <Container>
                <div className='navbar '>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/apps'>Apps</NavLink>
                                <NavLink to='/installation'>Installation</NavLink>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost border-none text-xl font-bold  gradient-text"> <img className='w-8' src={logo} alt="" /> HERO.IO</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-15  ">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/apps'>Apps</NavLink>
                            <NavLink to='/installation'>Installation</NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <a className="btn text-white border none bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub/> Contribute</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;