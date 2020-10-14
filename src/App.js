import React, { useEffect } from "react";
import './App.css';
import { client } from "./client";
import Card from "./Card";
import Header from "./Header";
import Banner from "./Banner";

require('dotenv').config()

function App() {
 
  useEffect(() => {
    client.getEntries().then((response) => {
      
    })
    .catch(console.error)
  },[]);

 

    
  return (
    <div className="App">
    <div className="container">
      <header>
        <div className="wrapper">
          <span>React and Contentful</span>
          <Card/>
          <Header />
          <Banner />
        </div>
      </header>
      <main>

      </main>
    </div>
    </div>
    );
  }


export default App;
