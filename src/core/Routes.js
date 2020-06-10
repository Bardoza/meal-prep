import React from "react";
import { Switch, Route } from "react-router-dom";
import IngredientList from "../IngredientsList";
import Ingredient from "../Ingredient";

const Routes = () => {
  return (
    <Switch>
      <Route path="/ingredient">
        <Ingredient />
        <IngredientList />
      </Route>
      <Route path="/">
        <div>Recipies</div>
      </Route>
    </Switch>
  );
};

export default Routes;
