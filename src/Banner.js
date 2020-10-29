import { urlencoded } from "body-parser";
import React, { useState, useEffect } from "react";

import './App.css'
import './Banner.css'


const Banner = ()=> {

  const [banner, setBanner] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:7070/cards/')
    .then((response) => response.json())
    .catch(error=> console.error('Error:', error))
    .then(data => setBanner(data))
},[])
    console.log(banner);
    return (
      <>
        {banner && 
          <div className = "banner" style={{backgroundImage: "url(http://localhost:7070/images/banner.png)"}}>
             <h1 className = "bannerMessage">Welcome to Remy's kitchen</h1>
             <h3 className = "bannerDescription">where veggies are more than just ratatouille..!</h3>
        </div>
        }
      </>
    )
} 

export default Banner;
// 