const express = require('express');
const cardsRouter = express.Router();
const db = require('./database');

// retrieve recipes
cardsRouter.get("/", (req, res)=>{
    db.query("SELECT * FROM cards")
        .then((data) => res.json(data.rows))
        .catch((err)=> console.log(err));
})

cardsRouter.get("/:id", (req, res)=>{
    const {id} = req.params;
    db.query("SELECT * FROM cards WHERE id=$1", [id])
        .then((data) => res.json(data.rows))
        .catch((err)=> console.log(err));
})

// create new recipes //
cardsRouter.post('/', (req, res)=>{
    const { title, description, image, slug, ingredient, direction, bigImage } = req.body;
    
    const text = "INSERT INTO cards (title, description, image, slug, ingredient, direction, bigImage) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *"
    const values = [title, description, image, slug, ingredient, direction, bigImage]
    
    db.query(text, values)
        .then((data) => res.json(data.rows))
        .catch((err)=> console.log(err));
})

// update a recipe //
cardsRouter.put('/:id', (req, res)=>{
    const {id} = req.params;
    const { title, description, image, slug, ingredient, direction, bigImage } = req.body;
    //1. validations to check information sent by the client
    //2. check if the recipe(card) exists before updating
    //3. then update the recipes
    
    const text = "UPDATE cards SET title=$1, description=$2, image=$3, slug=$4, ingredient=$5, direction=$6, bigImage=$7 WHERE id=$8 RETURNING *";
    const values = [title, description, image, slug, ingredient, direction, bigImage, id];
    
    db.query(text, values)
        .then((data) => res.json(data.rows))
        .catch((err)=> console.log(err));
})

// delete a recipe //
cardsRouter.put('/:id', (req, res)=>{
    const {id} = req.params;
    
    const text = "DELETE FROM cards WHERE id=$1 RETURNING *";
    const values = [id];
    
    db.query(text, values)
        .then((data) => res.json(data.rows))
        .catch((err)=> console.log(err));
})

module.exports = cardsRouter;