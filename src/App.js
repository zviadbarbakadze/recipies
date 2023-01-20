import "./App.css";
import React, { useEffect, useState } from "react";

import Recipe from "./components/Recipe";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "722acafe";
  const APP_KEY = "c698e55158d5b99a5620a2ccecb855d5";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipe(data.hits);
  };
  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={finalSearch} className="form">
        <input
          type="text"
          value={search}
          onChange={getSearch}
          placeholder="For searching press button"
        />
        <button type="submit">search</button>
      </form>
      <div className="cards">
        {recipe.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
