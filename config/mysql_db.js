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

module.exports = {connectToDatabase, connector};

