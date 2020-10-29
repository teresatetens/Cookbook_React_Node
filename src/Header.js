import React from "react";
import "./App.css"
import { NavLink } from "react-router-dom"

function Header(){


    return (
        <div className="header">
            <h2 className="logoText">Remy's Kitchen</h2>
            <nav className="navigation">
                <NavLink className="navigationItem"  to="/cards" activeStyle={{color: "white"}}>Home</NavLink>     
                <NavLink className="navigationItem"  to="/aboutUs" activeStyle={{color: "white"}}>About&nbsp;Us</NavLink> 
            </nav>
            
        </div>
        );
    }


export default Header;