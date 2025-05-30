const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const itemsRouter = require("./router/item-router")

require('dotenv').config();

app.use(express.json());
app.use('/static', express.static('static')) 

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, 'views')); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

app.use('/', itemsRouter);

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

