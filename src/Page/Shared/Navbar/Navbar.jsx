import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import {Link} from "react-router-dom";

const Navbar = () => {

    const [Open, setOpen] = useState(false);


    return (
        <nav>

            <span onClick={() => setOpen(!Open)} className='md:hidden'>

                {
                    Open ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />
                }
            </span>

            <div className={` bg-[#607274] px-6 py-5 md:static absolute md:flex justify-center items-center z-10 ${Open ? "top-6" : "-top-60"} `}>
                <div>

                </div>
                <ul className='md:flex gap-4 text-[#EAECCC]'>
                    <li className=' hover:bg-purple-700 hover:text-[#EAECCC]'> <Link to={"/"}>Home</Link> </li>
                    <li className=' hover:bg-purple-700 hover:text-[#EAECCC]'> <Link to={"/"}>About</Link> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;