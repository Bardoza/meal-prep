import React from "react";
import "./styles.css";
import Routes from "./core/Routes";
import Nav from "./core/Nav";
import IngredientProvider from "./Ingredient/Ingredient.context";

export default function App() {
  return (
    <IngredientProvider>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </IngredientProvider>
  );
}
