import React, { useContext } from "react";
import { RecipeContext } from '../Context/RecipeContext';
import Recipe from "./Recipe";

export default function RecipeList() {
    const { state } = useContext(RecipeContext);

    const filteredRecipes = state.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    return (
        <ul>
            {filteredRecipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </ul>
    );
}