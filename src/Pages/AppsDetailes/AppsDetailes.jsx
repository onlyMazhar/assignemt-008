import React, { useState } from 'react';
import Container from '../../Components/Container/Container';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import dwnImg from '../../assets/download.svg'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import Swal from 'sweetalert2';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Spinner from '../../Components/Spinner/Spinner';


const AppsDetailes = () => {
    const [install, setInstall] = useState(false)
    const { apps, loading } = useApps() // custom hook
    const { id } = useParams();

    const selectedApp = apps.find(a => a.id === Number(id))
    if (loading) return <Spinner />
    const { title, slogan, downloads, size, reviews, ratings, description, ratingAvg, image, companyName } = selectedApp;

    const handleInstall = () => {
        const addedtoLocal = JSON.parse(localStorage.getItem('installed'));

        let updatelist = [];

        if (addedtoLocal) {
            const isExist = addedtoLocal.some(a => a.id === selectedApp.id)

            if (isExist) {
                return Swal.fire({
                    icon: "error",
                    title: "Already Installed "
                })
            }
            else { updatelist = [...addedtoLocal, selectedApp] }

        } else {
            updatelist.push(selectedApp)
        }
        localStorage.setItem('installed', JSON.stringify(updatelist))

        !install && Swal.fire({ //
            title: "Successfully Installed",
            icon: "success",
            draggable: true
        });
        setInstall(true)
    }
    return (
        <>
            <Container>
                <div className="pb-1 border-b border-b-gray-300 flex flex-col gap-4 items-center md:flex-row xl:flex-row my-6 md:my-10 xl:my-10   mx-auto">
                    <figure>
                        <img
                            className='w-72'
                            src={image}
                            alt={`Image of ${title} app`} />
                    </figure>
                    <div className="card-body space-y-6">
                        <div className='border-b border-b-gray-300 pb-4 space-y-2'>
                            <h2 className="card-title text-3xl">{`${title} : ${slogan}`}</h2>
                            <p className='text-[#627382]'>Developed by <span className='text-violet-500 font-semibold'>{companyName}</span></p>
                        </div>
                        <div className='flex '>
                            <div className='space-y-2 mr-8 md:mr-15 xl:mr-20'>
                                <div>
                                    <img className='w-7' src={dwnImg} alt="" />
                                </div>
                                <p className='text-[#627382] '>Downloads</p>
                                <p className='text-4xl font-bold'>{downloads}M</p>
                            </div>
                            <div className='space-y-2  mr-8 md:mr-15 xl:mr-20'>
                                <div>
                                    <img className='w-7' src={rating} alt="" />
                                </div>
                                <p className='text-[#627382] '>Average Rating</p>
                                <p className='text-4xl font-bold'>{ratingAvg}</p>
                            </div>
                            <div className='space-y-2 '>
                                <div>
                                    <img className='w-7' src={review} alt="" />
                                </div>
                                <p className='text-[#627382] '>Total Reviews</p>
                                <p className='text-4xl font-bold'>{reviews}K</p>
                            </div>

                        </div>
                        <div className="card-actions">
                            <button onClick={handleInstall} className="btn bg-green-400 text-white ">
                                {
                                    install
                                        ? <span>Installed </span>
                                        : <span>Install Now ( {size}MB )</span>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                {/* Chart Data */}
                <div  >
                    <h3 className='text-2xl font-bold'>Ratings</h3>
                    <div className='  h-96   rounded-xl '>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ratings} layout="vertical" >
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" width={80} tick={{ fill: '#627382', fontSize: 14 }} />
                                <Bar dataKey="count" fill="#ff8811" radius={[0, 0, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='  mx-auto py-10  text-justify leading-7 space-y-3'>
                    <p className='font-bold text-lg'>Discription</p>
                    <p className='text-[#627382] '>{description}</p>
                </div>
            </Container>
        </>
    );
};

export default AppsDetailes;

