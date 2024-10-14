import React from "react";

export default function Recipe({ recipe }) {
    return (
        <li>
            <strong>{recipe.name}</strong> - {recipe.ingredients}
        </li>
    )
}