import React, { useState } from 'react';
import Container from '../../Components/Container/Container';
import { RxDownload } from 'react-icons/rx';
import { TiStarFullOutline } from 'react-icons/ti';
import { loadAppList } from '../../Utilities/loadAppList';
import Spinner from '../../Components/Spinner/Spinner';

const Installation = () => {
    const [sortDownload, setSortDownload] = useState('none')
    const [applist, setApplist] = useState(() => loadAppList())



    // console.log(applist)
    const handleSort = () => {
        let sortedList = [...applist]
        if (sortDownload === 'download-asc') {
            sortedList.sort((a, b) => a.downloads - b.downloads)
        } else if (sortDownload === 'download-desc') {
            sortedList.sort((a, b) => b.downloads - a.downloads)
        }
        return sortedList;
    }

    const handleRemove = (id) => {
        const addedToLS = JSON.parse(localStorage.getItem('installed'))
        let updatedList = addedToLS.filter(a => a.id !== id)
        setApplist(updatedList)
        localStorage.setItem('installed', JSON.stringify(updatedList))
    }




    return (
        <>
            <Container>
                <div className='my-20'>
                    <div className='text-center space-y-4 mb-10'>
                        <h3 className='text-4xl font-bold'>Your Installed Apps</h3>
                        <p>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <p> Apps Found ({applist.length})</p>
                            <label className='form-control max-w-xs'>
                                <select className='btn btn-active' value={sortDownload} onChange={e => setSortDownload(e.target.value)}>
                                    <option value="none">Sort By Download</option>
                                    <option value="download-asc">Low-&gt; High</option>
                                    <option value="download-desc">High-&gt; Low</option>
                                </select>
                            </label>
                        </div>

                        {
                            handleSort().map(a => <div className=" my-4 flex  justify-between p-4 items-center rounded-xl  bg-base-100 shadow-md mx-auto">
                                <div className='flex gap-4 items-center'>
                                    <img
                                        className='rounded-lg w-24'
                                        src={a.image}
                                        alt="Shoes" />
                                    <div className="  px-0">
                                        <h2 className="font-bold md:card-title py-2">{a.title} : {a.slogan}</h2>
                                        <div className=' flex flex-col md:flex-row justify-start  md:gap-6'>
                                            <span className="flex  items-center  text-green-500"><RxDownload />{a.downloads}M</span>
                                            <span className=" flex items-center   text-amber-500"><TiStarFullOutline />{a.ratingAvg}</span>
                                            <span>{a.size}MB</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleRemove(a.id)} className="btn bg-green-400 text-white ">
                                        Uninstall
                                    </button>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </Container>
        </>
    );
};

export default Installation;