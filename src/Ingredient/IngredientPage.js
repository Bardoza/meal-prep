import React from "react";
import IngredientProvider from "../Ingredient/Ingredient.context";
import IngredientList from "../Ingredient/IngredientList";
import Ingredient from "../Ingredient/Ingredient";

const IngredientPage = () => {
  return (
    <IngredientProvider>
      <Ingredient />
      <IngredientList />
    </IngredientProvider>
  );
};

export default IngredientPage;
