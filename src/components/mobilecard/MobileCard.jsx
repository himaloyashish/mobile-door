import React from 'react';

const MobileCard = ({mobile}) => {
    const {id, name, type, processor, memory, os, imageUrl } = mobile
    return (
        <div className=''>
            <img src={imageUrl} alt="" />
            <p>{name}</p>
            
        </div>
    );
};

export default MobileCard;