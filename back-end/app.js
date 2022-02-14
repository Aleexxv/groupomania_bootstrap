const express = require('express');
require('dotenv').config();
const cors = require('cors');

//DATABASE
const db = require('./config/db');
const User = require('./models/users');
const Blog_texts = require('./models/Blog_Texts');

db.authenticate()
    .then(() => console.log('Connexion à la base de donnée réussi !'))
    .catch(err => console.error('Connexion à la base de donnée échoué essai encore !', err));

(async () => {
    try {
        await User.sync ({ alter: true })
        await Blog_texts.sync ({ alter: true })
    } catch (error) {
        console.error(error)
    }
})()

//APP
const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
const usersRoute = require('./routes/users');
const blogTextsRoute = require('./routes/blogTexts');

//HEADERS APP
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers','origin, X-Requested-with, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// USE ROUTES
app.use('/api/users', usersRoute);
app.use('/api/blogTexts', blogTextsRoute);

// EXPORT APP
module.exports = app;