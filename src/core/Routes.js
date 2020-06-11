import React from "react";
import { Switch, Route } from "react-router-dom";
import IngredientsProvider from "../Ingredients/context";
import IngredientList from "../IngredientsList";
import Ingredient from "../Ingredient";

const Routes = () => {
  return (
    <Switch>
      <Route path="/ingredient">
        <IngredientsProvider>
          <Ingredient />
          <IngredientList />
        </IngredientsProvider>
      </Route>
      <Route path="/">
        <div>Recipies</div>
      </Route>
    </Switch>
  );
};

export default Routes;
