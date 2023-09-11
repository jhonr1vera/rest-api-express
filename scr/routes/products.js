const { Router } = require('express');
const router = Router();
const createController = require('../controllers/createControllers');
const addProduct = require('../../config/mysql_db.js');

// create endpoint
router.get('/create', function(req, res){
    res.render('create.ejs', {title:'Create a new product', action:'add'});
});

// router.get('/adding/:productImage/:productName/:productPrice/:productDetail', function(req, res){
//     let productImage = req.params.productImage
//     let productName = req.params.productName
//     let productPrice = req.params.productPrice
//     let productDetail = req.params.productDetail
//     addProduct(productImage, productName, productPrice, productDetail);
//     res.redirect('/create');

//     console.log(productImage, productName, productPrice, productDetail);
// });

router.get('/adding/:productImage/:productName/:productPrice/:productDetail', async function(req, res){
    let productImage = req.params.productImage;
    let productName = req.params.productName;
    let productPrice = req.params.productPrice;
    let productDetail = req.params.productDetail;

    try {
        await addProduct(productImage, productName, productPrice, productDetail);
        console.log(productImage, productName, productPrice, productDetail);
        res.redirect('/create');
    } catch (error) {
        console.error('Error al agregar el producto:', error);
        res.status(500).send('Error interno del servidor');
    }
});

//#region endpoints
//detail endpoint
// get

// delete endpoint
// delete

// listar
// put
//#endregion

module.exports = router; // Enables routing of routes