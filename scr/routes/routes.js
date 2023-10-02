const { Router } = require('express'); //llama la funcion router
const router = Router();
const controller = require('../controllers/controllers');
const { connectToDatabase } = require('../../config/mysql_db');
const  multer = require('multer')
const storage = require('../../config/multer');
const uploader = multer({storage});


// create endpoint
router.get('/create', function(req, res){
    res.render('create.ejs', {title : "New Product"});
});

// product list endpoint
router.get('/products', controller.list);

// edit-delete endpoint
router.get('/edit/:product_id', controller.edit); //Obtain data from the id
router.post('/edit/update/:product_id', storage.single('file'), controller.update); //update data from id
router.get('/delete/:product_id', controller.delete);

// search

// select
router.get('/article/:product_id', controller.select);

module.exports = router; // Enables routing of routes