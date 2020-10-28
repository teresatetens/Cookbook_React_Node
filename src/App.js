import React from "react";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import './App.css';
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer"
import MainPageButton from "./MainPageButton";

const App = ()=> {

  return (
    <Router>
        <div>
          <Header />
          <Banner />
            <About/>
          <Switch>           
            <Route component ={Card} path='/cards/:recipeId?' />
            <Route path='/cards'/>
          </Switch>  
          <Footer />
        </div>
        </Router>
  );  
}
export default App;
