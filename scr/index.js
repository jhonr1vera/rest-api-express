const express = require('express');
const morgan = require('morgan');
const multer = require( 'multer'); //to see connection
const path = require('path');
const controller = require('../scr/controllers/controllers');
const storage = require('../config/multer');
const uploader = multer({storage});
// db
const db = require('../config/mysql_db.js');
const {connectToDatabase, connector } = require('../config/mysql_db.js');

// ADVICE!!!:
// const myConnection = require('express-myconnection'); tentativoa
// cors is installed, tentativo
// const cors = require('cors')

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('viewengine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //allow see views in routes

// middlewares
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//static files: css - js
app.use(express.static(path.join(__dirname, '/public')))

// routes
app.use('/api', require('./routes/routes'));
app.get('/', function(req, res){
  res.render('index.ejs', {title : "Product Management"});
});
app.post('/adding', storage.single('file'), controller.save)

//server on
  app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`); //message concatened with app.set('port') in settings
});

