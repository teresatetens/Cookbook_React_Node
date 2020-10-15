import React from "react";
import './App.css';
import Card from "./Card";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./Footer"
require('dotenv').config()

function App() {
 
  

  return (
    <Router>
        <div>
          <Header />
          <Banner />
            <About/>
          <Card />
          <Footer />
        </div>
        </Router>
        );  
}


export default App;
