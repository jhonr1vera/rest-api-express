// MySql

const mysql = require('mysql');

const connector = mysql.createConnection({
    host: 'localhost',
    password: 'password',
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

