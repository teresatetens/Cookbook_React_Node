import React from "react";
import './App.css';
import {Switch, Route} from 'react-router-dom';
import { client } from "./client";

import Header from "./Header";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer"

require('dotenv').config()

function App() {
  return (
        <div>
          <Header />
          <Banner />
          <Switch>           
            <Route component ={Card} path='/:recipeName?' />
          </Switch>          
          <Footer />
        </div>
        );  
}
export default App;
