import React from "react";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import './App.css';
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer"
import AboutUs from "./AboutUs"

const App = ()=> {

  return (
    <Router>
        <div>
          <Header />
          <Banner />
          <Switch>           
            <Route component ={Card} path='/cards/:recipeId?' />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/cards'/>
          </Switch>
          <Footer />
        </div>
        </Router>
  );  
}
export default App;
