// import express from 'express';
const express = require('express'); 
const app = express();


app.set('view engine', 'ejs');

// Define a basic route
app.get('/', (req, res) => {
    // res.send('Hello, Express World!');  // Send a response
    res.render('index', {
        name: "Bro",
        titlePage: "Startpage",
        header: "Homepage"
    });
  });

  app.get('/comments-show', (req, res) => {
    // res.send('Hello, Express World!');  // Send a response
    res.render('comments-show', {
        name: "Bro",
        titlePage: "Show Comments",
        header: "View all comments"
    });
  });

  app.get('/comments-form', (req, res) => {
    // res.send('Hello, Express World!');  // Send a response
    res.render('comments-form', {
        name: "Bro",
        titlePage: "Write Comments",
        header: "Write a comment"
    });
  });

  
  const PORT = 3000;
  app.listen(PORT, () => {  // Listen on port 3000
    console.log(`Server is running at http://localhost:${PORT}`);
  });