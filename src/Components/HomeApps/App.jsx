import React from 'react';
import Container from '../Container/Container';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaArrowDown } from 'react-icons/fa';
import { RxDownload } from 'react-icons/rx';

const App = ({ app }) => {
    console.log(app)
    const {downloads,title,ratingAvg,image} = app;
    return (

        <>
            <Container>
                <div className=" rounded-xl p-4  bg-base-100 xl:w-86 shadow-sm mx-auto">
                    <img
                        className='rounded-lg'
                        src={image}
                        alt="Shoes" />
                    <div className="  px-0">
                        <h2 className="card-title py-2">{title}</h2>
                        <div className=' flex justify-between'>
                            <span className="badge bg-gray-100 text-green-500"><RxDownload/>{downloads}</span>
                            <span className="badge bg-amber-100 text-amber-500"><TiStarFullOutline/>{ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default App;