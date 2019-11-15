const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port);