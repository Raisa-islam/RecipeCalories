import React from 'react';
import PropTypes from "prop-types";
import CurrentlyCookingCard from './CurrentlyCookingCard';

const CurrentlyCooking = ({currentlyCookings}) => {
    let count = 1;
    
    return (
        <div className=' border'>
            <div className='flex flex-row justify-center text-xl font-semibold text-[#282828] pt-4 pb-4 border-b-[1px]'>
                <p>Currently cooking: {currentlyCookings.length}</p>
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

                            currentlyCookings.map((currentlyCooking) => (
                                <CurrentlyCookingCard key={currentlyCooking.id} currentlyCooking={currentlyCooking} count= {count++}></CurrentlyCookingCard>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

CurrentlyCooking.propTypes ={
    currentlyCookings: PropTypes.object.isRequired
}

export default CurrentlyCooking;