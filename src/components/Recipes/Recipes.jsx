import { useState } from "react";
import { useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import PropTypes from "prop-types";
const Recipes = ({handleAddToWannaCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        fetch("recipe.json")
        .then((res) => res.json())
        .then((data) => setRecipes(data));

    },[]);

    return (
        <div>

        {
            recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} handleAddToWannaCook={handleAddToWannaCook}></RecipeCard>
            ))
        }
            
        </div>
    );
};

Recipes.propTypes = {
    handleAddToWannaCook: PropTypes.func
}
export default Recipes;