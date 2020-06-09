import React from "react";
import "./styles.css";
import Routes from "./core/Routes";
import Nav from "./core/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}
