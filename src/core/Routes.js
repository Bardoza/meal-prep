import React from "react";
import { Switch, Route } from "react-router-dom";
import IngredientPage from "../Ingredient/IngredientPage";
import RecipePage from "../Recipe/RecipePage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/ingredient">
        <IngredientPage />
      </Route>
      <Route path="/">
        <RecipePage />
      </Route>
    </Switch>
  );
};

export default Routes;
