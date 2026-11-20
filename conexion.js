const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

var productoSchema = require("./models/producto");

const conexion = new Sequelize("productosDSM1", "root", "jocelynsa7.", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    dialectModule: mysql2
});

const Producto = productoSchema(conexion);

conexion.sync({ force: false })
    .then(() => {
        console.log("Conexion exitosa a la base de datos");
    })
    .catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    });

module.exports = {
    Producto
};