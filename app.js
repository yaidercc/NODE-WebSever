const express = require('express')
const app = express();
const hbs = require("hbs");
require("dotenv").config();
const port = process.env.PORT;

// especificar el template engine que vamos a usar para las vistas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//servir contenido estatico
app.use(express.static('public/'))

// app.get('/', function (req, res) {
//     // res.sendFile(__dirname+'/public/index.html')
//     res.render('home',{
//         nombre: 'Yaider Cordoba',
//         titulo: 'Curso de Node'
//     })
// });

// app.get('/Elements', function (req, res) {
//     res.render('elements')
// });

// app.get('/generic', function (req, res) {
//     res.render('generic')
// });

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(port, function () {
    console.log(`Example app listeninf at http://localhost:${port}`);
});

