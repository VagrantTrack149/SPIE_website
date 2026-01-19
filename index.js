const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const cors= require('cors');

app.use(cors()); // Enable CORS for all routes

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


app.get('/api/activities', (req, res) => {
  const activities_path=path.join(__dirname, 'public/img/activities');
  const fs = require('fs');
  const carpetas= fs.readdirSync(activities_path);
  console.log(carpetas);
  const resultado= carpetas.map(folder=>{
    const carpeta_path=path.join(activities_path,folder);
    const fotos= fs.readdirSync(carpeta_path);
    return {
      evento: folder,
      imagenes: fotos
    };
  });
  res.json(resultado);
  /*fs.readdir(activities_path, (err, files) => {
    if (err) {
      console.error('Error al leer el directorio:', err);
      return res.status(500).json({ error: 'Error al leer el directorio de actividades' });
    }
    //console.log(files);
    const imagenes=files.filter(file=>
    ['.jpg','.jpeg','.png','.gif'].includes(path.extname(file).toLowerCase)
    );
    console.log(imagenes);
    res.json(files);
    });*/
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});