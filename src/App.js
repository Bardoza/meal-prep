import React, { useState, useEffect } from "react";
import "./styles.css";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientsList";
import { save, load } from "./service";

export default function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    (async function() {
      const ing = await load();
      setIngredients(ing);
    })();
  }, []);

  const handleNewIngredient = newIngredient =>
    save(newIngredient)
      .then(response => {
        console.log(response);
        setIngredients([...ingredients, newIngredient]);
      })
      .catch(e => {
        console.log(e.response.data);
      });

  return (
    <div className="App">
      <h1>Ingredients</h1>
      <Ingredient onAdd={handleNewIngredient} key={ingredients.length} />
      <hr />
      <IngredientList ingredients={ingredients} />
    </div>
  );
}
