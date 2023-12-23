import React, { useEffect, useState } from 'react';


const AllMobile = () => {

    const [change, setChange] = useState()

    const [myToys, setMyToys] = useState([])
    console.log(myToys)

    const user = ''

    useEffect(() => {
        fetch(`http://localhost:5000/allMobile?limit=${11}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    // console.log(myToys)

    const handleSearch = () => {
        fetch(`http://localhost:5000/mobil/${change}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    return (
        <div>
             <div className='text-center py-4'>
                    <input onChange={(e) => setChange(e.target.value)} className='input ' type="search" name="search" placeholder='Search by Toy name' id="" />
                    <button onClick={handleSearch} className='btn'>Search</button>
                </div>
            
        </div>
    );
};

export default AllMobile;