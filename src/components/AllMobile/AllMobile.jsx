import React, { useEffect, useState } from 'react';
import MobileCard from '../mobilecard/MobileCard';


const AllMobile = () => {

    const [change, setChange] = useState()

    const [mobiles, setMobile] = useState([])
    console.log(mobiles)

    const user = ''

    useEffect(() => {
        fetch(`http://localhost:5000/allMobile?limit=${11}`)
            .then(res => res.json())
            .then(data => setMobile(data))
        
    }, [])
    // console.log(myToys)

    const handleSearch = () => {
        fetch(`http://localhost:5000/mobile/${change}`)
            .then(res => res.json())
            .then(data => setMobile(data))
    }

    return (
        <div>
            <div className='text-center py-4'>
                <input onChange={(e) => setChange(e.target.value)} className='input ' type="search" name="search" placeholder='Search' id="" />
                <button onClick={handleSearch} className='btn'>Search</button>
            </div>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    mobiles.map( mobile=> <MobileCard key={mobile.id} mobile={mobile}> </MobileCard> )
                }
            </div>

        </div>
    );
};

export default AllMobile;