import React, { useState, useEffect } from "react"

import "./App.css"

function About(props){  
    
    const [ about, setAbout ] = useState(null)

    useEffect(() => {
        fetch('http://localhost:7070/cards/')
        .then((response) => response.json())
        .catch(error=> console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)))
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