import React from 'react';
import Container from '../../../Components/Container/Container';
import { RxDownload } from 'react-icons/rx';
import { TiStarFullOutline } from 'react-icons/ti';
import { Link } from 'react-router';

const SingleApp = ({ app }) => {
    const { downloads, title, ratingAvg, image,slogan } = app;
    return (
        <>
            <Container>
                <Link>
                    <div className="transition delay-100 duration-350 easy-in-out hover:translate-y-0.5 hover:scale-110 flex flex-col justify-around rounded-xl p-4 h-full bg-base-100  shadow-md mx-auto">
                        <img
                            className='rounded-lg'
                            src={image}
                            alt="Shoes" />
                        <div className="  px-0">
                            <h2 className="card-title py-2">{title} : {slogan}</h2>
                            <div className=' flex justify-between'>
                                <span className="badge bg-gray-100 text-green-500"><RxDownload />{downloads}M</span>
                                <span className="badge bg-amber-100 text-amber-500"><TiStarFullOutline />{ratingAvg}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </Container>
        </>
    );
};

export default SingleApp;