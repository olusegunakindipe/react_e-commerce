import React, {Component}from "react";
import './App.css';
// import MainContent from "./MainContent";
import Navbar from './Navbar.js';
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <ShoppingCart/>
    </React.Fragment>
  );
}

export default App;
