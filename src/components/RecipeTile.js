import React from "react";

function RecipeTile({ title,calories,image,ingredients }) {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {ingredients.map(ingredient => (
                    <p>{ingredient.text}</p>
                ))}
            </div>
            <h3>{Math.floor(calories) + " kcal"}</h3>
            <img src={image} alt="" />

        </div>
    );
}


export default RecipeTile;