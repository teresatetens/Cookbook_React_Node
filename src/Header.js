import React, { useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter as Router, NavLink } from "react-router-dom"

function Header(){

    const [ header, setHeader ] = useState(null)

    useEffect(() => {
        fetch('http://localhost:7070/cards/')
        .then((response) => response.json())
        .catch(error=> console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)))
  },[])

    return (
        <Router>
        <div className="header">
            
            <h2 className="logoText">Remy's Kitchen</h2>
            <nav className="navigation">
                {header && header.fields.navigationItems.map((navItem, index) => {
                    return (
                        <NavLink className="navigationItem" key={index} to={`/${navItem}`} activeStyle={{ color: "white"}}>{navItem}</NavLink> 
                    )    
                })}
              
            </nav>
            
            </div>
        </Router>
        );
    }


export default Header;