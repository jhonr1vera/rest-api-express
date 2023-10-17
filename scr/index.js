const express = require('express');
const morgan = require('morgan');
const multer = require( 'multer'); //to see connection
const path = require('path');
const controller = require('../scr/controllers/controllers');
const storage = require('../config/multer');
const uploader = multer({storage});
const i18n_back = require('i18n'); //to translate backend(in develop)
const i18n = require('i18n-express'); 

// db
const db = require('../config/mysql_db.js');
const {connectToDatabase, connector } = require('../config/mysql_db.js');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('viewengine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //allow see views in routes

// middlewares
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use( i18n({
  translationsPath: path.join(__dirname, '../locales'),
  siteLangs: ["en","es"],
  textsVarName: 'translation',
  defaultLocale: 'en' 
  }));

//static files: css - js
app.use(express.static(path.join(__dirname, '/public')))

// routes
app.use('/api', require('./routes/routes'));
app.get('/', function(req, res){
  res.render('index.ejs');
});
app.post('/adding', storage.single('file'), controller.save)

//server on
  app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});

