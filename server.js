const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
//const passport = require('./auth');
const Book = require('./models/Book.js')

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


// Middleware Function

// app.use(passport.initialize());
// const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/', function (req, res) {
    res.send('Welcome to RTR');
})


// Import the router files
const studentroutes = require('./routes/studentroutes');
const bookroutes = require('./routes/bookroutes')
const libroutes = require('./routes/librarianroutes')
const globalroutes = require('./routes/globalroutes')

// Use the routers
app.use('/student', studentroutes);
app.use('/book', bookroutes);
app.use('/lib', libroutes);
app.use('/', globalroutes);

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})