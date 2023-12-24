import React from 'react';
import {  FaFacebook, FaInstagram, FaLinkedin,  } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#11235A] px-2 py-14 grid grid-cols-1 lg:grid-cols-4 '>
            <div className='space-y-4'>
                <p className='inline-flex items-center text-white'>Mobile Door </p>
                <p className='text-orange-500'>Subscribe Us</p>
                <br />
                <input type="email" className='h-10 p-2 rounded text-black' name="email" id="" />
                <button className='btns ml-2 text-white'>Sign in</button>
                <p></p>
            </div>
            <div className='text-white space-y-4'>
                <h2>Service Items</h2>
                <Link>Mobile</Link>
                <br />
                <Link>All Product</Link>
            </div>
            <div className='text-white space-y-4'>
                <h2>Privacy</h2>
                <Link>Terms & condition</Link>
                <p>&copy; Mobile Door</p>
                <br />
                <hr />
            </div>
            <div className='space-y-4'>
                <h2 className='text-white'>Find Us</h2>
                <p className='text-white'>We are always responsible.</p>
                <p className='text-white'>Round Square, At Mobile Door,  Gulshan-1212</p>
                <div className='flex gap-2'>
                    <Link><FaInstagram className='h-8 w-8 text-red-500'></FaInstagram> </Link>
                    <Link><FaLinkedin className='h-8 w-8 text-blue-400'></FaLinkedin> </Link>
                    <Link><FaFacebook className='h-8 w-8 text-blue-500'></FaFacebook> </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;