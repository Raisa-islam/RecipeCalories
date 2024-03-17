import PropTypes from "prop-types";

const WannaCookCard = ({wannaCook, handleAddToCurrentlyCooking, count }) => {
    const { recipe_id, recipe_name,  preparing_time, calories} = wannaCook;
    console.log(wannaCook);

    return (
        <>
            <tr className="bg-base-200">
                <td className="text-[#282828CC] text-[16px] font-semibold w-[2px]">{count}</td>
                <td className="text-[16px] font-normal text-[#282828B3] w-4">{recipe_name}</td>
                <td className="text-[16px] font-normal text-[#282828B3] w-2">{preparing_time}</td>
                <td className="text-[16px] font-normal text-[#282828B3] w-4">{calories}</td>
                <td className="text-[16px] font-normal text-[#282828B3]">  <button onClick={() => handleAddToCurrentlyCooking(wannaCook)} className="btn bg-[#0BE58A] rounded-[50px] text-sm font-medium">Preparing</button></td>
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