import React from 'react';
import Container from '../Container/Container';
import Err404 from '../../assets/error-404.png'
import { useNavigate, useRouteError } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <Container>
            <div className='text-center my-20'>
                <div>
                    <img className='mx-auto' src={Err404} alt="Error 404 Image" />
                    <h1>{error}</h1>
                </div>
                <div className='space-y-5 mt-15'>
                    <h3 className='text-5xl font-bold'>Oops, page not found!</h3>
                    <p>The page you are looking for is not available.</p>
                    <button onClick={() => navigate(-1)} className="btn  mx-auto text-white border none bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        Go Back !
                    </button>
                </div>


            </div>

        </Container>
    );
};

export default Error;