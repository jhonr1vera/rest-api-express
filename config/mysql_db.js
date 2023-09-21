// MySql

const mysql = require('mysql');

const connector = mysql.createConnection({
    host: 'localhost',
    password: 'JpM213',
    user: 'rootuser',
    database: 'projectmanagement_db'

});

const connectToDatabase = ( ) => {
    connector.connect(err => {
        if(err)
            throw err;
        else
            console.log('Conexion asegurada');

    });
};

//#region funcion "temporal"

// const connectToDatabase = ( ) => {
//     connection.connect((error) => {
//         if(error){
//             throw error;
//         }else{
//             console.log('Conexion asegurada');
//         }
//     });

//     // Haz algo con la conexión...

//     connection.end((err) => {
//         if(err){
//             throw err;
//         }else{
//             console.log('Conexion cerrada');
//         }
//     });
// };


// api/create add

// const addProduct = (productImage, productName, productPrice, productDetail) => {
//     const sql = `INSERT INTO new_product (product_id, product_image, product_name, product_price, product_detail) VALUES ("${productImage}", "${productName}", ${productPrice}, "${productDetail}" )`

// const addProduct = (productName, productPrice, productDetail) => {
//     const sql = `INSERT INTO new_product (product_id, product_name, product_price, product_detail) VALUES ("${productName}", ${productPrice}, "${productDetail}" )`

//     connector.query(sql, function(err, result, filed){
//         if(err){
//             throw err;
//         }else{
//             console.log(result)
//         }
//     })
// };

//#endregion

module.exports = {connectToDatabase, connector};

