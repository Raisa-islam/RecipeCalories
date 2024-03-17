import React from 'react';
import PropTypes from "prop-types";

const WannaCookCard = ({wannaCook, handleAddToCurrentlyCooking, count }) => {
    const { recipe_id, recipe_name,  preparing_time, calories} = wannaCook;
    console.log(wannaCook);

    return (
        <>
            <tr className="bg-base-200">
                <td>{count}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td>  <button onClick={() => handleAddToCurrentlyCooking(wannaCook)} className="btn bg-[#0BE58A] rounded-[50px]">Preparing</button></td>
            </tr>
        </>
    );
};

WannaCookCard.propTypes ={
    count: PropTypes.object.isRequired,
    wannaCook: PropTypes.object.isRequired,
    handleAddToCurrentlyCooking: PropTypes.func
}
export default WannaCookCard;