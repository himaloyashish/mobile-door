import React from 'react';

const MobileCard = ({mobile}) => {
    const {name, type, processor, memory, os, imageUrl } = mobile
    return (
        <div className='bg-[#7C93C3] text-[#fcf9f9] '>
            <img src={imageUrl} alt="" />
            <p className='font-bold text-xl px-2 mb-2 mt-2 '>Name: {name}</p>
            <p className='font-bold  px-2 '>Type: {type}</p>
            <p className='font-bold  px-2 '>Processor: {processor}</p>
            <p className='font-bold  px-2 pb-4'>Memory: {memory}</p>
            
        </div>
    );
};

export default MobileCard;