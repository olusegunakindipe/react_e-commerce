import React, {Component}from "react";
import './App.css';
import MainContent from "./MainContent";
import Navbar from './Navbar.js';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <MainContent/>
    </React.Fragment>
  );
}

export default App;
