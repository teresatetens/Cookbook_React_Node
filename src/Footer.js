import React, { useState, useEffect } from "react";

import "./App.css";
import SearchBar from "./SearchBar"

function Footer() {

    const [ footer, setFooter ] = useState(null)

    useEffect(() => {
        fetch('http://localhost:7070/cards/')
        .then((response) => response.json())
        .catch(error=> console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)))
  },[])


    console.log(footer);

    return (
        <div className="footer">
        {footer && footer.fields.image1.map((el, index) => {
            return(
                <>
                    <div className="socialmediaContainer">
                    <ul className="socialmedia">
                        <li key={index}><img src={el.fields.file.url} alt="socmed"/></li>
                    </ul>
                    </div>
                </>
            )
            
        })}
            <div className="copyright">
            <p>Copyright © 2020 - Remy's Kitchen</p>
            </div>
            <div className="search-container">
                <SearchBar/>
            </div>
            
        </div>

    )
}


export default Footer;