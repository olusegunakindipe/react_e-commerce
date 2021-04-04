import React from "react";
import './App.css';
// import MainContent from "./MainContent";
import Navbar from './Navbar';
import Login from './Login';
// import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Login/>
    </React.Fragment>
  );
}

export default App;
