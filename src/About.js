import React, { useState, useEffect } from "react"
import client from "./client"
import "./App.css"

function About(props){  
    
    const [ about, setAbout ] = useState(null)

    useEffect(() => {
        client.getEntries({
            content_type: "subtitle"
        })
        .then((response) => {setAbout(response.items[0])})
        .catch(console.error)
    },[])

    console.log(about)
    
    return  (
        <div>
            {about && 
                <div className="aboutContainer">
                 <h1 className="aboutTitle">Eat more veggie and not just ratatouille!</h1>
                 <h2>{about.fields.About}</h2>
                 <h3>{about.fields.description}</h3>
                </div>
            } 
        </div>
    )
}
export default About;