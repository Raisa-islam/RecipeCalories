import React from 'react';
import PropTypes from "prop-types";

const CurrentlyCookingCard = ({currentlyCooking, count}) => {
    console.log(currentlyCooking);
    const { recipe_id, recipe_name,  preparing_time, calories} = currentlyCooking;
   
    return (
        <>
            <tr className="bg-base-200">
                <td>{count}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                
            </tr>
        </>
    );
};

CurrentlyCookingCard.propTypes ={
    count: PropTypes.object.isRequired,
    currentlyCooking: PropTypes.object.isRequired
}
export default CurrentlyCookingCard;