import React, { useEffect } from "react";

import { useIngredients } from "./Ingredients/context";

const IngredientList = () => {
  const [ingredients, actions] = useIngredients();

  useEffect(() => {
    actions.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <button onClick={actions.remove(ing.ingredientId)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientList;
