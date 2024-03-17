import React from "react";
import img1 from '../../assets/profile.png'
import searchi from '../../assets/search.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 py-3 mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-normal text-[#150B2BB3]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-[#150B2B] font-bold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-normal text-[#150B2BB3]">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end flex flex-row gap-4">
                <label className="input input-bordered flex items-center gap-2 rounded-[50px]">
                    <img src={searchi} alt="" />
                    <input type="text" className="grow" placeholder="Search" />
                    
                </label>

                <div className="bg-[#0BE58A] w-8 h-8 rounded-full flex flex-row justify-center items-center">
                    <img src={img1} alt="" className="w-6 h-6" />

                </div>
            </div>
        </div>
        // <div className="flex flex-row justify-between py-3 mt-12">
        //     <h1 className='text-3xl text-[#150B2B] font-bold'>Recipe Calories</h1>
        //     <div className="text-lg font-normal text-[#150B2BB3] flex flex-row justify-between w-[400px]">
        //         <p>Home</p>
        //         <p>Recipes</p>
        //         <p>About</p>
        //         <p>Search</p>
        //     </div>

        //     
        // </div>
    );
};

export default Navbar;