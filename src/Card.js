import React, { useEffect, useState } from "react";
import { client } from "./client";
import {cardContainer} from './Card.css';


function Card () {
  const [recipes,setRecipes] = useState(null);

    useEffect(() => {
        client.getEntries({
          content_type: "recipes"
        }).then((response) => {setRecipes(response.items);console.log(recipes)})
      })

    return (
      <div className="cardContainer" >
      {recipes&& recipes.map((recipe,index)=>{
        return(
        <div className="card" key={index} style={{backgroundImage: "url("+recipe.fields.image.fields.file.url+")"}}>
          <h3> {recipe.fields.title}</h3>
          <p>{recipe.fields.description}</p>
        </div>
      )
    })
      
    }
        
      </div>
    )
} 

export default Card;

        