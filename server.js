var express = require('express');
var produtoRoutes = require('./routes/produto-routes');

var app = express();

//varios motores de vistas
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

//rutas
app.use('/', produtoRoutes);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor iniciando en el puerto:  "+ port);
});