import React, { useState, useEffect } from "react";
import { loadIngredients, deleteIngredient } from "./service";

const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    loadIngredients().then(setIngredients);
  }, []);

  const handleDeleteItem = (ingredientId) => () => {
    deleteIngredient(ingredientId)
      .then((response) => {
        console.log({ response });
        setIngredients(
          ingredients.filter((ing) => ing.ingredientId !== ingredientId)
        );
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Serving</th>
          <th>Calories</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Protein</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ing) => (
          <tr key={ing.ingredientId}>
            <td>{ing.name}</td>
            <td>
              {ing.serving} {ing.unit}
            </td>
            <td>{ing.calories}</td>
            <td>{ing.fat}</td>
            <td>{ing.carbs}</td>
            <td>{ing.protein}</td>
            <td>
              <button onClick={handleDeleteItem(ing.ingredientId)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientList;
