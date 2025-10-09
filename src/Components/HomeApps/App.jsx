import React from 'react';
import Container from '../Container/Container';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaArrowDown } from 'react-icons/fa';
import { RxDownload } from 'react-icons/rx';
import { Link } from 'react-router';

const App = ({ app }) => {
    // console.log(app)
    const { downloads, title, ratingAvg, image, slogan, id } = app;
    return (

        <>
                <Link to={`/apps/${id}`}>
                    <div className="h-full transition delay-100 duration-350 easy-in-out hover:translate-y-0.5 hover:scale-110 flex flex-col justify-around rounded-xl p-4  bg-base-100 shadow-md mx-auto w-86">
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
        </>
    );
};

export default App;