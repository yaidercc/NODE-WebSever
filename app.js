require("dotenv").config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 5001;
// Establecer handlebars para mostrar las vistas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
// Middle 
app.use(express.static('public'));

app.get('/', function (req, res) {
    // renderizar vistas de handlebars
    res.render('home',{
        nombre:'Yaider Cordoba Cordoba',
        titulo:'El mas bello'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre:'Yaider Cordoba Cordoba',
        titulo:'El mas bello'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre:'Yaider Cordoba Cordoba',
        titulo:'El mas bello'
    });
})

// Si la ruta especificada no es ninguna de las anteriores 
app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port,function (req, res){
    console.log(`Example app listening at http://localhost:${port}`);
})