
import PropTypes from "prop-types";

const CurrentlyCookingCard = ({currentlyCooking, count}) => {
    console.log(currentlyCooking);
    const {recipe_name,  preparing_time, calories} = currentlyCooking;
   
    return (
        <>
       
            <tr className="bg-base-200">
                <td className="text-[#282828CC] text-[16px] font-semibold">{count}</td>
                <td className="text-[16px] font-normal text-[#282828B3]">{recipe_name}</td>
                <td className="text-[16px] font-normal text-[#282828B3]">{preparing_time}</td>
                <td className="text-[16px] font-normal text-[#282828B3]">{calories}</td>
                
            </tr>
        </>
    );
};

CurrentlyCookingCard.propTypes ={
    count: PropTypes.object.isRequired,
    currentlyCooking: PropTypes.object.isRequired
}
export default CurrentlyCookingCard;