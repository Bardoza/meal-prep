import React, { useContext, useState } from "react";
import shortid from "shortid";
import {
  loadIngredients,
  deleteIngredient,
  createIngredient,
} from "../service";

const IngredientsContext = React.createContext();

const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);

  const load = async () => {
    console.log("calling load");
    const list = await loadIngredients();
    setIngredients(list);
  };

  const remove = (ingredientId) => async () => {
    await deleteIngredient(ingredientId);
    setIngredients(
      ingredients.filter((ing) => ing.ingredientId !== ingredientId)
    );
  };

  const add = async ({
    name,
    serving,
    calories,
    unit,
    fat,
    carbs,
    protein,
  }) => {
    const newIngredient = {
      ingredientId: shortid.generate(),
      name,
      serving,
      calories,
      unit,
      fat,
      carbs,
      protein,
    };
    await createIngredient(newIngredient);
    setIngredients([...ingredients, newIngredient]);
  };

  const actions = {
    load,
    remove,
    add,
  };

  return (
    <IngredientsContext.Provider value={[ingredients, actions]}>
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => useContext(IngredientsContext);

export default IngredientsProvider;
