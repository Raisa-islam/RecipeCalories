import React from "react";
import img1 from '../../assets/profile.png'
const Navbar = () => {
    return (
        <div className="flex flex-row justify-between px-12 py-3 mt-12">
            <h1 className='text-3xl text-[#150B2B] font-bold'>Recipe Calories</h1>
            <div className="text-lg font-normal text-[#150B2BB3] flex flex-row justify-between w-[400px]">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>

            <div>
                <div className="bg-[#0BE58A] w-8 h-8 rounded-full flex flex-row justify-center items-center">
                    <img src={img1} alt="" className="w-6 h-6"/>
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;