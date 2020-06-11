import React, { useState } from "react";
import { useIngredients } from "./Ingredients/context";
import Input from "./Input";
import isNumeric from "./utils/isNumeric";

const validateIngredient = ({
  name,
  calories,
  serving,
  unit,
  fat,
  carbs,
  protein,
}) => {
  const errors = {};

  if (!name) {
    errors.name = "Name required";
  }

  if (!serving) {
    errors.serving = "Serving is required";
  }

  if (!unit) {
    errors.unit = "Ingredient unit required";
  }

  if (!isNumeric(fat)) {
    errors.fat = "Fat must be a number";
  }

  if (!isNumeric(calories)) {
    errors.calories = "calories must be a number";
  }

  if (!isNumeric(carbs)) {
    errors.carbs = "carbs must be a number";
  }

  if (!isNumeric(protein)) {
    errors.protein = "Protein must be a number";
  }

  if (!isNumeric(serving)) {
    errors.serving = "Serving must be a number";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const Ingredient = () => {
  const [, actions] = useIngredients();
  const [name, setName] = useState("");
  const [serving, setServing] = useState("");
  const [unit, setUnit] = useState("");
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [errors, setErrors] = useState({});

  const handleAddIngredient = (e) => {
    e.preventDefault();

    setErrors({});
    const params = {
      name,
      serving,
      calories,
      unit,
      fat,
      carbs,
      protein,
    };

    const form = validateIngredient(params);

    if (!form.isValid) {
      return setErrors(form.errors);
    }

    actions.add(params).catch((e) => {
      setErrors({ global: e.message });
    });
  };

  return (
    <form onSubmit={handleAddIngredient}>
      <strong>{errors.global}</strong>
      <Input
        id="name"
        label="Name"
        onChange={setName}
        value={name}
        error={errors.name}
      />
      <Input
        id="serving"
        label="Serving Size"
        onChange={setServing}
        value={serving}
        error={errors.serving}
      />
      <Input id="unit" label="Serving Unit" onChange={setUnit} value={unit} />
      <Input
        id="calories"
        label="Calories"
        onChange={setCalories}
        value={calories}
        error={errors.calories}
      />
      <Input
        id="fat"
        label="Fat"
        onChange={setFat}
        value={fat}
        error={errors.fat}
      />
      <Input
        id="carbs"
        label="Carbs"
        onChange={setCarbs}
        value={carbs}
        error={errors.carbs}
      />
      <Input
        id="protein"
        label="Protein"
        onChange={setProtein}
        value={protein}
        error={errors.protein}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default Ingredient;
