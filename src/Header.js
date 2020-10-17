
import React, { useEffect, useState } from "react";
import client from "./client"
import "./App.css"
import { BrowserRouter as Router, NavLink } from "react-router-dom"

function Header(){

    const [ header, setHeader ] = useState(null)

    useEffect(() => {
        client.getEntries({
            content_type: "header"
        })
        .then((response) => { 
          setHeader(response.items[0])})
        .catch(console.error)
    },[])
    console.log(header);

    return (
        <Router>
        <div className="header">
            {header && <img className="logo" src={header.fields.logo.fields.file.url} alt="logo" style={{ width: "40px"}}/>}
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