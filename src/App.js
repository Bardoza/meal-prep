import React, { useState, useEffect } from "react";
import "./styles.css";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientsList";
import { save, load } from "./service";

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    load().then(setIngredients);
  }, []);

  const handleNewIngredient = (newIngredient) => {
    setError("");
    save(newIngredient)
      .then(() => {
        setIngredients([...ingredients, newIngredient]);
      })
      .catch((e) => setError(e.message));
  };

  return (
    <div className="App">
      <h1>Ingredients</h1>
      <Ingredient onAdd={handleNewIngredient} key={ingredients.length} />
      <strong>{error}</strong>
      <hr />
      <IngredientList ingredients={ingredients} />
    </div>
  );
}
