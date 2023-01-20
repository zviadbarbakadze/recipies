import React from "react";
import style from "./recipe.module.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.card}>
      <h5>{title}</h5>
      <p> Calories : {calories}</p>
      <img className={style.image} src={image} alt="" />
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
}
