import React, { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export default function Recipe({ recipe }) {
    const { state, dispatch } = useContext(RecipeContext);
    const isFav = state.favorites.some(fav => fav.id === recipe.id);
    
    const handleToggleFavorite = () => {
        if (isFav) {
            dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: recipe });
        } else {
            dispatch({ type: 'ADD_TO_FAVORITES', payload: recipe });
        }
    };

    const handleDeleteRecipe = () => {
        dispatch({ type: 'DELETE_RECIPE', payload: recipe });
    };

    return (
        <li className="recipe-item">
            <div className="recipe-left">
                <button className="icon-btn" onClick={handleToggleFavorite}>
                    <FontAwesomeIcon 
                        icon={isFav ? solidStar : regularStar} 
                        style={{ color: isFav ? 'gold' : 'gray' }} 
                    />
                </button>
            </div>
            <div className="recipe-content">
                <strong>{recipe.name}</strong> - <span>{recipe.ingredients}</span>
            </div>
            <div className="recipe-right">
                <button className="icon-btn" onClick={handleDeleteRecipe}>
                    <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                </button>
            </div>
        </li>
    )
}