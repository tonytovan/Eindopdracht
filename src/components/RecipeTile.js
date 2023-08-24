import React from "react";
import './Recipetile.css'

function RecipeTile({ title,calories,image,ingredients, url }) {
    return (
        <div className="recipeTile">
            <h4 className="recipeTile_title">{title}</h4>
            <img className="recipeTile_img" src={image} alt="" />
            <div className="recipeTile_text">
                {ingredients.map(ingredient => (
                    <p>{ingredient.text}</p>
                ))}
            </div>
            <h3>{Math.floor(calories) + " kcal"}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
                URL
            </a>
        </div>
    );
}


export default RecipeTile;