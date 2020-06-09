import React, { useState } from "react";
import shortid from "shortid";
import Input from "./Input";
import { save } from "./service";

const Ingredient = () => {
  const [name, setName] = useState("");
  const [serving, setServing] = useState("");
  const [unit, setUnit] = useState("");
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [error, setError] = useState("");

  const handleAddIngredient = (e) => {
    e.preventDefault();
    save({
      ingredientId: shortid.generate(),
      name,
      serving,
      calories,
      unit,
      fat,
      carbs,
      protein,
    }).catch((e) => setError(e.message));
  };

  return (
    <form onSubmit={handleAddIngredient}>
      <strong>{error}</strong>
      <Input id="name" label="Name" onChange={setName} value={name} />
      <Input
        id="serving"
        label="Serving Size"
        onChange={setServing}
        value={serving}
      />
      <Input id="unit" label="Serving Unit" onChange={setUnit} value={unit} />
      <Input
        id="calories"
        label="Calories"
        onChange={setCalories}
        value={calories}
      />
      <Input id="fat" label="Fat" onChange={setFat} value={fat} />
      <Input id="carbs" label="Carbs" onChange={setCarbs} value={carbs} />
      <Input
        id="protein"
        label="Protein"
        onChange={setProtein}
        value={protein}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default Ingredient;
