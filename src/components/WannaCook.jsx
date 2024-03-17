import React from 'react';
import PropTypes from "prop-types";
import WannaCookCard from './WannaCookCard';

const WannaCook = ({ wannaCooks, handleAddToCurrentlyCooking }) => {
    let count = 1;
    // console.log(wannaCooks);
    return (
        <div className=''>
            <div className='flex flex-row justify-center text-xl font-semibold text-[#282828] pt-4 pb-4 border-b-[1px]'>
                <p>Want to cook: {wannaCooks.length}</p>
            </div>

            <div className="mt-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            wannaCooks.map((wannaCook) => (
                                
                                <WannaCookCard key={wannaCook.id} wannaCook={wannaCook} handleAddToCurrentlyCooking = {handleAddToCurrentlyCooking} count={count++}></WannaCookCard>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            


        </div>
    );
};

WannaCook.prototype = {
    wannaCooks: PropTypes.object.isRequired,
    handleAddToCurrentlyCooking: PropTypes.func
}
export default WannaCook;