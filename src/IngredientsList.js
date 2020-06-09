import React, { useState, useEffect } from "react";
import { load } from "./service";

const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    load().then(setIngredients);
  }, []);

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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientList;
