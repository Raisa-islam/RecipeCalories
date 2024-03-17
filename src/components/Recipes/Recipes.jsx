import { useState } from "react";
import { useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
const Recipes = () => {

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
                <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
            ))
        }
            
        </div>
    );
};

export default Recipes;