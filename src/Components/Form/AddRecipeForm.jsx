import React, { useContext } from 'react';
import { RecipeContext } from '../Context/RecipeContext';

export default function AddRecipeForm() {
    const { state, dispatch } = useContext(RecipeContext);

    const handleChange = (e) => {
        dispatch({
            type: 'SET_NEW_RECIPE',
            payload: { name: e.target.name, value: e.target.value}
        });
    };

    const addRecipe = (e) => {
        e.preventDefault();
        if (state.newRecipe.name && state.newRecipe.ingredients) {
            dispatch({
                type: 'ADD_RECIPE',
                payload: { name: state.newRecipe.name, ingredients: state.newRecipe.ingredients }
            });
        }
    };

    return (
        <form onSubmit={addRecipe}>
          <input
            type="text"
            name="name"
            placeholder="Nazwa przepisu"
            value={state.newRecipe.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ingredients"
            placeholder="Składniki"
            value={state.newRecipe.ingredients}
            onChange={handleChange}
          />
          <button type="submit">Dodaj przepis</button>
        </form>
    );
}