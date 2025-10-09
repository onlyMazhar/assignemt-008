import React, { useState } from 'react';
import Container from '../../Components/Container/Container';
import SingleApp from './SingleApp/SingleApp';
import useApps from '../../Hooks/useApps';

const Apps = () => {
    const { apps } = useApps();
    const [search, setSearch] = useState('');
    // console.log(search)

    const term = search.trim().toLocaleLowerCase();
    // console.log(input)

    const foundApps = term
        ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
        : apps

    // console.log(foundApps)
    return (
        <div>
            <Container>
                <div className=' my-20 '>
                    <div className='text-center  space-y-3'>
                        <h3 className='text-5xl font-bold'>Our All Applications</h3>
                        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='text-2xl font-bold'>({foundApps.length}) Apps Found</h3>
                        </div>
                        <div>
                            <label className="input bg-transparent">
                                <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
                            </label>
                        </div>
                    </div>
                    {
                        foundApps.length === 0
                            ? <div className=' my-20  flex flex-col justify-center text-center text-2xl md:text-4xl xl:text-6xl font-bold text-gray-200 h-42'><p>No app Found</p></div>
                            : <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-6 mt-6 '>
                                {
                                    foundApps.map(app => <SingleApp key={app.id} app={app} />)
                                }
                            </div>
                    }

                </div>
            </Container >
        </div >
    );
};

export default Apps;
