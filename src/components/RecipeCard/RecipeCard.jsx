import PropTypes from "prop-types";

const RecipeCard = ({recipe}) => {

    const {recipe_id, recipe_name } = recipe;
    return (
        <div>
            <p>{recipe_id}</p>
            <p>{recipe_name}</p>
        </div>
    );
};


RecipeCard.propTypes = {
    recipe : PropTypes.object.isRequired
}
export default RecipeCard;