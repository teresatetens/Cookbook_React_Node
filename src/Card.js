import React, { useEffect } from "react";
import { client } from "./client";


function Card () {

    useEffect(() => {
        client.getEntries({
          content_type: "recipes"
        }).then((recipe) => {
          console.log(recipe)
        })
      })

    return (
        <>
        <h1>Hello world</h1>
        </>
    )
} 

export default Card;