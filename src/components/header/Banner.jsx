import React from 'react';
import banImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className='flex flex-row justify-center items-center h-[600px] rounded-3xl mt-12 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${banImg})` }}>
            <div className='flex flex-col md:w-2/3 gap-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-white text-center'>Discover an exceptional cooking class tailored for you!</h1>
                <h3 className='text-white font-normal text-center text-xl'>Unleash Your Culinary Creativity with Personalized Cooking Classes: Explore, Learn, and Elevate Your Skills Today</h3>

                <div className='flex flex-col md:flex-row gap-10 text-xl font-semibold items-center justify-center'>
                    <button className='text-[#150B2BB3] bg-[#0BE58A] rounded-[50px] px-7 py-5'>Explore Now</button>
                    <button className='text-white border border-white rounded-[50px] px-7 py-5'>Our Feedback</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;