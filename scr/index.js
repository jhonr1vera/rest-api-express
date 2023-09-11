const express = require('express');
const morgan = require('morgan');
const initDB = require('../config/mysql_db'); //mysql connection
const path = require('path');
const addProduct = require('../config/mysql_db');

// const myConnection = require('express-myconnection'); tentativo
// cors is installed, tentativo

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('viewengine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //allow see views in routes

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static files: css - js
app.use(express.static(path.join(__dirname, '/public')))

// routes
app.use('/api', require('./routes/products'));
app.get('/', function(req, res){
  res.render('index.ejs');
});

//server on
  app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`); //message concatened with app.set('port') in settings
});

