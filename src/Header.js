
import React, { useEffect, useState } from "react";
import client from "./client"
import "./App.css"

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


    return(
        <div className="header">
            {header && <img className="logo" src={header.fields.logo.fields.file.url} alt="logo" style={{ width: "40px"}}/>}
            <h2 className="logoText">Remy's Kitchen</h2>
            <ul className="navigation">
            {header && header.fields.navigationItems.map((el, index) => {
                return (
                    <li key={index}>{el}</li>
                )    
             })}
            </ul>
            </div>
    );
    

}

export default Header;