import React, { useState, useEffect } from "react";

import './App.css'
import './Banner.css'


const Banner = ()=> {

  const [banner, setBanner] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:7070/cards/')
    .then((response) => response.json())
    .catch(error=> console.error('Error:', error))
    .then(response => console.log('Success:', JSON.stringify(response)))
},[])

    return (
      <>
        {banner && 
          <div className = "banner" style={{backgroundImage:`url(${banner.fields.image.fields.file.url})`}}>
             <h1 className = "bannerMessage">{banner.fields.bannerMessage}</h1>
             <p className = "bannerDescription">{banner.fields.description}</p>
        </div>
        }
      </>
    )
} 

export default Banner;
// 