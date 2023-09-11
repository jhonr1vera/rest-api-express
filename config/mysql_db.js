// MySql

const mysql = require('mysql');

const conecction = mysql.createConnection({
    host: 'localhost',
    database: 'projectmanagement_db',
    user: 'rootuser',
    password: 'JpM213'
});

const connecting = conecction.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion asegurada')
    }

});

// create add

const addProduct = (productImage, productName, productPrice, productDetail) => {
    const sql = `INSERT INTO new_product (product_id, product_image, product_name, product_price, product_detail) VALUES (${null}, "${productImage}", "${productName}", ${productPrice}, "${productDetail}" )`

    conecction.query(sql, function(error, result, filed){
        if(error){
            throw error;
        }else{
            console.log(result)
        }
    })
};

module.exports = {addProduct, connecting};

