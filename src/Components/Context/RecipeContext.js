import React, { useReducer, createContext } from "react";
import {recipeReducer, initialState} from './RecipeReducer';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, initialState);

    return (
        <RecipeContext.Provider value={{state, dispatch}}>
            {children}
        </RecipeContext.Provider>
    )
};