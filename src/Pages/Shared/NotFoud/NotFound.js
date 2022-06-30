import React from 'react';
import lazy from '../../../images/lazy.jpg';
const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>Mechannic is sleeping</h2>
            <img className='w-50' src={lazy} alt="" />
        </div>
    );
};

export default NotFound;