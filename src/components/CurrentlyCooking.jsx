
import PropTypes from "prop-types";
import CurrentlyCookingCard from './CurrentlyCookingCard';

const CurrentlyCooking = ({ currentlyCookings }) => {
    let count = 1;
    const TotalCal = currentlyCookings.reduce((accumulator, currentValue) => accumulator + currentValue.calories, 0);
    const TotalTime = currentlyCookings.reduce((accumulator, currentValue) => accumulator + currentValue.preparing_time, 0);



    return (
        <div className=''>
            <div className='flex flex-row justify-center text-xl font-semibold text-[#282828] pt-4 pb-4 border-b-[1px] mx-6'>
                <p>Currently cooking: {currentlyCookings.length}</p>
            </div>
            <div className="mt-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-[16px] font-medium text-[#878787]">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {

                            currentlyCookings.map((currentlyCooking) => (
                                <CurrentlyCookingCard key={currentlyCooking.id} currentlyCooking={currentlyCooking} count={count++}></CurrentlyCookingCard>
                            ))
                        }


                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th className='text-[16px] font-medium'>Total Time = <br /> {TotalTime} minutes</th>
                            <th className='text-[16px] font-medium'>Total Calories = <br />{TotalCal} calories</th>
                            
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

CurrentlyCooking.propTypes = {
    currentlyCookings: PropTypes.object.isRequired
}

export default CurrentlyCooking;