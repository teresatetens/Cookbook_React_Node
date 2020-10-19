import React, { useState, useEffect } from "react";
import { client } from "./client";
import './App.css'
import './Banner.css'


const Banner = ()=> {

  const [banner, setBanner] = useState(null);
  
    useEffect(() => {
        client.getEntries({
          content_type: "banner"
        }).then((response) => {
          console.log(response);
          setBanner(response.items[0]);
        })
        .catch(console.error)
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