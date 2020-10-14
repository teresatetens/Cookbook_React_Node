import React, { useEffect, useState } from "react";
import { client } from "./client";
import './Card.css';


function Card () {
  const [recipes,setRecipes] = useState(null);

    useEffect(() => {
        client.getEntries({
          content_type: "recipes"
        }).then((response) => {setRecipes(response.items);console.log(recipes)})
      })

    return (
      <div className="cardContainer">
      {recipes&& recipes.map((recipe,index)=>{
        return(
        <div key={index} className="card">
          <h3> {recipe.fields.title}</h3>
          <img className="cardImage" src={recipe.fields.image.fields.file.url} alt={recipe.fields.description}/>
          <p>{recipe.fields.description}</p>
        </div>
      )
    })
      
    }
        
      </div>

    )
} 

export default Card;

        