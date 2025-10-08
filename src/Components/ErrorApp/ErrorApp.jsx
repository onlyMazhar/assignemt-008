import React from 'react';
import NoApp from '../../assets/App-Error.png'
import Container from '../Container/Container';
import { useNavigate } from 'react-router';

const ErrorApp = () => {
    const navigate = useNavigate();
    return (
         <Container>
            <div className='text-center my-20'>
                <div>
                    <img className='mx-auto' src={NoApp} alt="Error 404 Image" />
                </div>
                <div className='space-y-5 mt-15'>
                    <h3 className='text-5xl font-bold'>Oops, No Apps Found!</h3>
                    <p>The page you are looking for is not available.</p>
                    <button onClick={() => navigate('/')} className="btn  mx-auto text-white border none bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        Home !
                    </button>
                </div>


            </div>

        </Container>
    );
};

export default ErrorApp;