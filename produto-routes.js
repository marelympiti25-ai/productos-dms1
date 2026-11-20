var router = require('express').Router();
var {Producto}= require('../conexion');

// ruta raiz 
router.get('/', async (req, res) => {
    res.render("pages/index")
})

//ruta para abrir la pagina de insertar
router.get('/insertarProducto', (req, res) => {
    res.render("pages/insertarProducto")
})

//ruta o peticion para insertar un producto nuevo
router.post('/guardarProducto',(req, res) => { 
    producto.create(req.body)
    .then(() => {
        console.log("Producto guardado exitosamente");
        res.redirect('/listarProducto');
    })
    .catch((error) => {
        console.error("Error al guardar el producto:", error);        
    });
})
    
// ruta o peticion para obtener todos los productos
router.get('/listarProducto',(req, res) => {
    producto.findAll()
    .then((data) => {
        res.render("pages/listarProducto", { productos: data });
    })
    .catch((error) => {
        console.error("Error al obtener los productos:", error);
    });
})

// ruta para buscar un producto por su id
router.get('/buscarProducto/:idProducto', (req, res) => {
    producto.findAll({
        where: {
            idProducto: req.params.idProducto
        }
    })
    .then((data) => {
        res.render("pages/modificarProducto", { producto: data[0] });
    })
    .catch((error) => {
        console.error("Error al buscar el producto:", error);
    });
});

//ruta para modificar un producto
router.post('/modificarProducto', (req, res) => {
    var idProducto = req.body.idProducto
    const productoModificado=
    { 

        nombreProducto: req.body.nombreProducto,
        marcaProducto: req.body.marcaProducto,
        precioProducto: req.body.precioProducto,
    }

    producto.update(productoModificado, {
        where: {
            idProducto:idProducto
        }
    })
    
    .then(() => {
        console.log("Producto modificado exitosamente");
        res.redirect('/listarProducto');
    })
    .catch((error) => {
        console.error("Error al modificar el producto:", error);
    });
   
})

//ruta para eliminar un producto
router.get('/eliminarProducto/:idProducto', (req, res) => {
    producto.destroy({
        where: {
            where: {idProducto: req.params.idProducto}
        }
        
    })
    .then(() => {
        console.log("Producto eliminado exitosamente");
        res.redirect('/listarProducto');
    })
    .catch((error) => {
        console.error("Error al eliminar el producto:", error);
    })

})
module.exports = router;
