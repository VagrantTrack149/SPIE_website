const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory
//Images, styles, and scripts will be served from the public directory

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(PORT, () => {
  console.log('Server running in port'+ PORT);
});

// Serve the index.html file

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/Inicio', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages', 'contact.html'));
});

app.get('/Activites', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages', 'Activites.html'));
});

app.get('/Members', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages', 'members.html'));
});