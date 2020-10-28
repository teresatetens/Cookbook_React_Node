require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./app/database');
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.json());
const cors = require('cors');

console.log(path.join(__dirname + '/public'));

app.use(express.static(path.join(__dirname + '/public')));

app.use(cors());

    // home
    app.get("/", (req, res)=>{
        db.query("SELECT NOW()")
            .then((data) => res.send(data.rows[0]))
            .catch((err)=> res.sendStatus(500));
    });

    // retrieve recipes
    app.get("/cards", (req, res)=>{
        db.query("SELECT * FROM cards")
            .then((data) => res.json(data.rows))
            .catch((err)=> console.log(err));
    })

    app.get("/cards/:id", (req, res)=>{
        const {id} = req.params;
        db.query("SELECT * FROM cards WHERE id=$1", [id])
            .then((data) => res.json(data.rows))
            .catch((err)=> console.log(err));
    })

    // create new recipes //
    app.post('/cards', (req, res)=>{
        const { title, description, image, slug, ingredient, direction, bigImage } = req.body;
        
        const text = "INSERT INTO cards (title, description, image, slug, ingredient, direction, bigImage) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *"
        const values = [title, description, image, slug, ingredient, direction, bigImage]
        
        db.query(text, values)
            .then((data) => res.json(data.rows))
            .catch((err)=> console.log(err));
    })

    // update a recipe //
    app.put('/cards/:id', (req, res)=>{
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
    app.put('/cards/:id', (req, res)=>{
        const {id} = req.params;
        
        const text = "DELETE FROM cards WHERE id=$1 RETURNING *";
        const values = [id];
        
        db.query(text, values)
            .then((data) => res.json(data.rows))
            .catch((err)=> console.log(err));
    })



const port = process.env.PORT || 7070;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})
