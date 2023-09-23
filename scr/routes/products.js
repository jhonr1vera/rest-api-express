const { Router } = require('express'); //llama la funcion router
const router = Router();
const controller = require('../controllers/controllers');
const { addProduct, connectToDatabase } = require('../../config/mysql_db');

// create endpoint
router.get('/create', function(req, res){
    res.render('create.ejs');
});
// product list endpoint
router.get('/products', controller.list);

// edit-delete endpoint
router.get('/edit/:product_id', controller.edit); //Obtain data from the id
router.post('/edit/update/:product_id', controller.update); //update data from id

router.get('/delete/:product_id', controller.delete);
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