import React, { useState, useEffect } from "react";
import client from "./client";
import "./App.css";
import SearchBar from "./SearchBar"

function Footer() {

    const [ footer, setFooter ] = useState(null)

    useEffect(() => {
        client.getEntries({
            content_type: "footer"
        })
        .then((response) => { 
          setFooter(response.items[0])})
        .catch(console.error)
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
        <div className="search-container">
                <SearchBar/>
                </div>
        </div>

    )
}


export default Footer;