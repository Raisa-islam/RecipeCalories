import React from 'react';
import banImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className='flex flex-row justify-center items-center h-[600px] rounded-3xl mt-12 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${banImg})` }}>
            <div className='flex flex-col w-2/3 gap-12'>
                <h1 className='text-5xl font-bold text-white text-center'>Discover an exceptional cooking class tailored for you!</h1>
                <h3 className='text-white font-normal text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</h3>

                <div className='flex flex-row gap-10 text-xl font-semibold items-center justify-center'>
                    <button className='text-[#150B2BB3] bg-[#0BE58A] rounded-[50px] px-7 py-5'>Explore Now</button>
                    <button className='text-white border border-white rounded-[50px] px-7 py-5'>Our Feedback</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;