// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');

let ProductsController = require('../controllers/ProductsController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

// Exporta las configuraciones
module.exports = router;

// Identifica la ruta /products/create y la envía al controlador
router.get('/products/create', ProductsController.create);
// Almacena el producto
router.post('/products', ProductsController.store);

// router.get('/products/create', ProductsController.create);

// Implementa ver el detalle de un producto
router.get('/products/:id', ProductsController.show);

// router.post('/products', ProductsController.store);
