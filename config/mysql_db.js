// MySql
require('dotenv').config();
const mysql = require('mysql');

const connector = mysql.createConnection({
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

const connectToDatabase = ( ) => {
    connector.connect(err => {
        if(err)
            throw err;
        else
            console.log('Secure');

    });
};

//#region "alternative"

// const connectToDatabase = ( ) => {
//     connection.connect((error) => {
//         if(error){
//             throw error;
//         }else{
//             console.log('Conexion asegurada');
//         }
//     });

//     connection.end((err) => {
//         if(err){
//             throw err;
//         }else{
//             console.log('Conexion cerrada');
//         }
//     });
// };

//#endregion

module.exports = {connectToDatabase, connector};

