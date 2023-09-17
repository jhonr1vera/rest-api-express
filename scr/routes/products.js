const { Router } = require('express');
const router = Router();
const imageController = require('../controllers/imageControllers');
const createController = require('../controllers/createControllers');
const { addProduct, connectToDatabase } = require('../../config/mysql_db');

// create endpoint
router.get('/create', function(req, res){
    res.render('create.ejs');
});

router.get('/adding/:productName/:productPrice/:productDetail', function(req, res){
    // let productImage = req.params.productImage;
    let productName = req.params.productName;
    let productPrice = req.params.productPrice;
    let productDetail = req.params.productDetail;
    // addProduct(productName, productPrice, productDetail);
    res.redirect('/api/create');
    console.log(productName, productPrice, productDetail);
});

//#region endpoints

// router.get('/adding/:productImage/:productName/:productPrice/:productDetail', async function(req, res){
//     let productImage = req.params.productImage;
//     let productName = req.params.productName;
//     let productPrice = req.params.productPrice;
//     let productDetail = req.params.productDetail;

//     try {
//         await addProduct(productImage, productName, productPrice, productDetail);
//         console.log(productImage, productName, productPrice, productDetail);
//         res.redirect('/create');
//     } catch (error) {
//         console.error('Error al agregar el producto:', error);
//         res.status(500).send('Error interno del servidor');
//     }
// });

//detail endpoint
// get

// delete endpoint
// delete

// listar
// put
//#endregion

module.exports = router; // Enables routing of routes