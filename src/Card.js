import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { client } from "./client";
import marked from 'marked';
import './Card.css';
import MainPageButton from "./MainPageButton";


const Card = ({match, history}) => {
  const [recipes,setRecipes] = useState(null);
  const {params:{recipeName}}= match; // match.param.recipeName destructure

  useEffect(() => {
        client.getEntries({
          content_type: "recipes"
        })
        .then((response) => {setRecipes(response.items)})
        .catch(console.error)
  },[])

  return (
    <div className={recipeName?"cardContainerBig":"cardContainer"}>
      {recipes && 
        recipes
        .filter(recipe => 
          recipeName 
          ? recipeName === recipe.fields.slug 
          : recipe
        )
        .map((recipe,index)=>{
          return(
            <div key={index} className={recipeName?"cardBig": "card"}>
              <Link to={`/${recipe.fields.slug}`}>
              <h3 className={recipeName?"cardTitleBig": "cardTitle"}> {recipe.fields.title} </h3>
              </Link>          
              <img className={recipeName?"cardImageBig":"cardImage"} src={recipeName ? recipe.fields.bigImage.fields.file.url: recipe.fields.image.fields.file.url} alt={recipe.fields.description}/>
              <p className={recipeName?"cardDescBig": "cardDesc"}>{recipe.fields.description}</p> 
              {recipeName? <section className="ingredient"dangerouslySetInnerHTML={{__html:marked(recipe.fields.ingredient)}} /> :""}            
            </div>
          )
        })
      }
      <MainPageButton history={history} />
    </div>
  )
} 


export default Card;

        //style={{backgroundImage: "url("+recipe.fields.image.fields.file.url+")"}}