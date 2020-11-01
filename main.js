require('dotenv').config();
const express = require('express');
const db = require('./app/database');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cardsRouter = require('./app/cardsRouter');
const app = express();

console.log(path.join(__dirname + '/public'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/public')));
app.use(cors());
app.use(morgan('common'));
app.use('/cards', cardsRouter);

    // home
    app.get("/", (req, res)=>{
        db.query("SELECT NOW()")
            .then((data) => res.send(data.rows[0]))
            .catch((err)=> res.sendStatus(500));
    });

    


const port = process.env.PORT || 7070;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})
