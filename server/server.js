const express = require('express');
const path = require('path');
// import express from "express";

const app = express();

// // Serve the static files from the Angular app
// app.use(express.static(path.join(__dirname, '../dist/your-angular-app')));

// // Handle Angular routing, return all requests to Angular app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

// Start the app by listening on the default Heroku port
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
