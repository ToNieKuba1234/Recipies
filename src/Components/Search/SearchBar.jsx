import React, { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext";

export default function SearchBar() {
    const { dispatch } = useContext(RecipeContext);

    const handleSearch = (e) => {
        dispatch({type: 'SET_SEARCH_TERM', payload: e.target.value });
    }

    return (
        <input 
            type="text"
            placeholder="Wyszukaj Przepis"
            onChange={handleSearch}
        />
    )
};