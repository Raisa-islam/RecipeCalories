import React from 'react';
import alerti from '../assets/alert.png'

const Alert = () => {
    return (
        <div className="relative">
            <div role="alert" className="alert alert-warning fixed top-4 right-6 z-50 w-5/12">
                <img src={alerti} alt="" className='w-10 h-10' />
                <span>Warning: The item is already added!</span>
                
            </div>
            
        </div>

    );
};

export default Alert;