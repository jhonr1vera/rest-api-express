const express = require('express');
const morgan = require('morgan'); //to see connection
const path = require('path');

// db
const db = require('../config/mysql_db.js');
const {connectToDatabase, connector } = require('../config/mysql_db.js');

// ADVICE!!!:
// const myConnection = require('express-myconnection'); tentativo
// cors is installed, tentativo
// multer
// public/img

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
app.use('/api', require('./routes/products'));
app.get('/', function(req, res){
  res.render('index.ejs');
});

app.post('/adding', (req, res) => {
  const { productName, productPrice, productDetail } = req.body;

  const query = `INSERT INTO new_product (product_name, product_price, product_detail) VALUES ('${productName}', ${productPrice}, '${productDetail}')`;

  connector.query(query, [productName, productPrice, productDetail], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'There was an error inserting data' });
    } else {
      res.status(200).json({
        message: 'Data added correctly',
        product: {
          productName,
          productPrice,
          productDetail
        }});
    }
  });
})

//server on
  app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`); //message concatened with app.set('port') in settings
});

