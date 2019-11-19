const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require('dotenv/config');

//IMPORT ROUTES

const postsRoute = require('./routes/posts');

//MIDDLEWARE
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res, next) => {
    console.log(`A user just accessed localhost:${port}${req.originalUrl}`);
    next();
},
    (req, res) => {
        res.send('Welcome to the home ROOT of your home page!');
    });

app.get('/posts', (req, res, next) => {
    console.log('A user just accessed /posts');
    next();
},
    (req, res) => {
        res.send('You are on posts!')
    })

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));

app.listen(port);