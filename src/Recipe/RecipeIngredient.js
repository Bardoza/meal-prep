import React, { useState, useEffect } from "react";
import { useIngredients } from "../Ingredient/Ingredient.context";

const createMacroCalculator = ({ serving = 1 }, amount = 0) => (macro = 0) =>
  (amount * macro) / serving;

const RecipeIngredient = () => {
  const [ingredients] = useIngredients();
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [amount, setAmount] = useState(0);
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);

  useEffect(() => {
    if (!Array.isArray(ingredients)) {
      return;
    }

    const ingredient = ingredients.find(
      ({ ingredientId }) => ingredientId === selectedIngredient
    );

    if (!ingredient) {
      return;
    }

    const macroCalculator = createMacroCalculator(ingredient, amount);
    setCalories(macroCalculator(ingredient.calories));
    setFat(macroCalculator(ingredient.fat));
    setCarbs(macroCalculator(ingredient.carbs));
    setProtein(macroCalculator(ingredient.protein));

    console.log(ingredient);
  }, [ingredients, selectedIngredient, amount]);

  const handleIngredientChange = (e) => setSelectedIngredient(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  return (
    <tr>
      <td>
        <select
          name="ingredient"
          id="ingredient"
          value={selectedIngredient}
          onChange={handleIngredientChange}
        >
          {ingredients.map(({ ingredientId, name, serving, unit }) => (
            <option key={ingredientId} value={ingredientId}>
              {`${name} - ${serving} ${unit}`}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input type="text" value={amount} onChange={handleAmountChange} />
      </td>
      <td>{calories}</td>
      <td>{fat}</td>
      <td>{carbs}</td>
      <td>{protein}</td>
    </tr>
  );
};
export default RecipeIngredient;
