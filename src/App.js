import React from "react";
import './App.css';
//import { client } from "./client";
import Card from "./Card";
import Header from "./Header";

require('dotenv').config()

function App() {


    
  return (
    <div className="App">
    <div className="container">
      <header>
        <div className="wrapper">
          <span>React and Contentful</span>
          <Card/>
          <Header />
        </div>
      </header>
      <main>

      </main>
    </div>
    </div>
    );
  }


export default App;
