import React from 'react';
import logo from '../../assets/logo.png'

const Spinner = () => {
    return (
        <div className=" h-dvh  ">
            <img className='mx-auto grayscale w-24 animate-spin' src={logo} />
        </div>
    );
};

export default Spinner;