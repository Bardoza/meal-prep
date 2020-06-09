import React, { useState } from "react";
import shortid from "shortid";
import Input from "./Input";

const Ingredient = ({ onAdd }) => {
  const [name, setName] = useState("Setltexz");
  const [serving, setServing] = useState("354");
  const [unit, setUnit] = useState("ml");
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    onAdd({
      ingredientId: shortid.generate(),
      name,
      serving,
      calories,
      unit,
      fat,
      carbs,
      protein,
    });
  };

  return (
    <form onSubmit={handleAddIngredient}>
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
