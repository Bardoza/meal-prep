import React from "react";
import { Switch, Route } from "react-router-dom";
import IngredientPage from "../Ingredient/IngredientPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/ingredient">
        <IngredientPage />
      </Route>
      <Route path="/">
        <div>Recipies</div>
      </Route>
    </Switch>
  );
};

export default Routes;
