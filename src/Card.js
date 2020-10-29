import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import marked from 'marked';
import renderHTML from "react-render-html";

import './Card.css';
import MainPageButton from "./MainPageButton";

const Card = ({match, history}) => {
  const [recipes,setRecipes] = useState(null);
  const {params:{recipeId}}= match; // match.params.recipeId destructure
  console.log(recipes);

  useEffect(() => {
        fetch('http://localhost:7070/cards/')
        .then((response) => response.json())
        .catch(error=> console.error('Error:', error))
        .then(data =>setRecipes(data))
  },[])
console.log(recipeId);
  return (
    <div className={recipeId?"cardContainerBig":"cardContainer"}>
      {recipes && 
        recipes
        .filter(recipe => 
          recipeId 
          ? parseInt(recipeId,10) === recipe.id 
          : recipe
        )
        .map((recipe)=>{
          return(
            <div key={recipe.id} className={recipeId?"cardBig": "card"}>
              <Link to={`/cards/${recipe.id}`}>
              <h3 className={recipeId?"cardTitleBig": "cardTitle"}> {recipe.title} </h3>
              </Link>          
              <img className={recipeId? "cardImageBig" : "cardImage"} src={recipeId?`http://localhost:7070/images/${recipe.bigimage}`:`http://localhost:7070/images/${recipe.image}` }/>
              <p className={recipeId? "cardDescBig": "cardDesc"}>{recipe.description}</p> 
              {recipeId? <section className="ingredient"> { renderHTML(marked(recipe.ingredient))}</section>:""}  
              {recipeId? <section className="direction"> { renderHTML(marked(recipe.direction))} </section>:""}               
              {recipeId? <MainPageButton history={history} /> : "" }
            </div>
          )
        })
      }
    </div>
  )
} 
export default Card;
