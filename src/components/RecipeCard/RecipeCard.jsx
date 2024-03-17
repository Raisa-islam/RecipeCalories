import PropTypes from "prop-types";
import clocki from '../../assets/clock.png'
import flamei from '../../assets/flame.png'
import ListItem from "./ListItem";
const RecipeCard = ({ recipe, handleAddToWannaCook }) => {

    const { recipe_id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    // console.log(recipe_id, calories);
    return (
        <div>
              
            <div className="card w-96 bg-white p-6 border border-[#28282833]">
                <figure className="">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl w-72 h-56" />
                </figure>
                <div className="mt-6">
                    <div className='mb-4'>
                        <h2 className="card-title mb-4 text-[20px] font-semibold">{recipe_name}</h2>
                        <p className="text-[16px] font-normal text-[#878787]">{short_description}</p>
                    </div>
                    <hr className='bg-[#28282826] mb-6' />
                    <div className='mt-4 mb-4'>
                        <p className="text-lg font-medium text-[#282828]">Ingredients: {ingredients.length}</p>
                        <div>
                            {
                                ingredients.map((ingredient) => (<ListItem key ={recipe_id} list={ingredient}></ListItem>))
                            
                            }
                           
                        </div>
                    </div>
                    <hr className='bg-[#28282826] mb-6'/>
                    <div className='flex flex-row justify-between mb-4'>
                        <div className='flex flex-row gap-2'>
                            <img src={clocki} alt="" />
                            <p className="text-[16px] font-normal">{preparing_time} minutes</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                           <img src={flamei} alt="" />
                            <p className="text-[16px] font-normal">{calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleAddToWannaCook(recipe)} className="btn bg-[#0BE58A] rounded-[50px]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToWannaCook: PropTypes.func
}
export default RecipeCard;