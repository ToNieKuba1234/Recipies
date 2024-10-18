import React, { useContext } from "react";
import { RecipeContext } from '../Context/RecipeContext';
import Recipe from "./Recipe";

export default function RecipeList() {
    const { state } = useContext(RecipeContext);

    const filteredRecipes = state.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

    const isFavorite = (recipe) => {
        return state.favorites.some(fav => fav.id === recipe.id);
    };

    return (
        <div>
            <h2>Przepisy</h2>
            {filteredRecipes.length === 0 ? (
                <p>Brak przepisów</p>
            ) : (
                <ul>
                    {filteredRecipes.map(recipe => (
                        <Recipe 
                            key={recipe.id} 
                            recipe={recipe}
                            isFavorite={isFavorite(recipe)}
                        />
                    ))}
                </ul>
            )}

            <h2>Ulubione Przepisy</h2>
            {state.favorites.length === 0 ? (
                <p>Brak ulubionych przepisów.</p>
            ) : (
                <ul>
                    {state.favorites.map(favorite => (
                        <Recipe 
                            key={favorite.id} 
                            recipe={favorite} 
                            isFavorite={true}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}