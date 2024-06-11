// import express from 'express';
const express = require('express'); 
const routes = require('./routes/routes_post.js')
const comments = require("./sharedData.js")
const app = express();


app.set('view engine', 'ejs');
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data


let showButton = true;
// Define a basic route
app.get('/', (req, res) => {
    // res.send('Hello, Express World!');  // Send a response
    res.render('index', {
        name: "Bro",
        titlePage: "Startpage",
        header: "Homepage",
        showButton: showButton
    });
  });

  app.get('/comments-show', (req, res) => {
    // res.send('Hello, Express World!');  // Send a response
    console.log(comments);
    res.render('comments-show', {
        name: "Bro",
        titlePage: "Show Comments",
        header: "View all comments",
        comments: comments
    });
  });

  app.get('/comments-form', (req, res) => {
    // res.send('Hello, Express World!');  // Send a response
    // comments.push({username: 'Tim3', comment: 'Cook3'});
    res.render('comments-form', {
        name: "Bro",
        titlePage: "Write Comments",
        header: "Write a comment"
    });
  });


  app.post('/formComments', routes.formComments);
  
  const PORT = 3000;
  app.listen(PORT, () => {  // Listen on port 3000
    console.log(`Server is running at http://localhost:${PORT}`);
  });

