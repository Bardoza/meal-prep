import React, { useEffect } from "react";
import RecipeIngredient from "./RecipeIngredient";
import { useIngredients } from "../Ingredient/Ingredient.context";

const RecipePage = () => {
  const [, actions] = useIngredients();
  useEffect(() => {
    actions.load();
  }, []);
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Amount</th>
          <th>Calories</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Protein</th>
        </tr>
      </thead>
      <tbody>
        <RecipeIngredient />
      </tbody>
    </table>
  );
};
export default RecipePage;
