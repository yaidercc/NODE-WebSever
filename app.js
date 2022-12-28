require("dotenv").config();
const express = require('express')
const hbs = require('hbs');
const app = express();
const port = 5000 | process.env.PORT;

// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

// Servir contenido estatico
app.use(express.static("public/"))

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Yaider',
        titulo:" Curso de Node"
    })
})

app.get("/hola-mundo", (req, res) => {
    res.send("hola mundo desde su respectiva ruta.")
})

app.get("/generic", (req, res) => {
    res.render('generic',{
        nombre: 'Yaider',
        titulo:" Curso de Node"
    })
})

app.get("/elements", (req, res) => {
    res.render('elements',{
        nombre: 'Yaider',
        titulo:" Curso de Node"
    })
})

app.listen(port,()=>{
    console.log(`Corriendo en la siguiente url http://localhost:${port}`);
})