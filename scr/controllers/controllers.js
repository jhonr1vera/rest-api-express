const controller = {};
const {connector} = require('../../config/mysql_db');
const  multer = require('multer')
const storage = require('../../config/multer');
const uploader = multer({storage});
const {i18n} = require('../plugins/i18n-plugin'); 

controller.list = (req, res) => {
    let sql = 'SELECT * FROM new_product';
    connector.query(sql, (err, results) => {
        if(err) {
            console.log(err);
        }else{
            res.render('products.ejs', { results })
        }
        
    });
};


controller.save = (req, res) => {
  const {body, file} = req;

    if(body && body.productName && body.productPrice && body.productDetail && file) {
    const domain = req.protocol + '://' + req.headers.host;
    let url = `${domain}/images/${file.filename}`;
    const sql = `INSERT INTO new_product (product_name, product_price, product_detail, product_img) VALUES (?, ?, ?, ?)`;
    
    i18n.init(req, res)  
    connector.query(sql, [body.productName, body.productPrice, body.productDetail, url], (err, results) => {
        if(err) {
            res.status(500).json({ success: false, message: 'There was an error inserting data' });
          } else {
            res.status(200).json({ success: true, message: 'Data added correctly' });
          }
      })}
};


controller.edit = (req, res) => {
    const {product_id} = req.params;
    const query = `SELECT * FROM new_product WHERE product_id = ?`;
    i18n.init(req, res)  
    connector.query(query, [product_id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({success: false, message: 'An error occurred'});
        } else {
            res.render('edit.ejs', {data : results[0]});
        }
    });
};



controller.update = (req, res) => {
    const {product_id} = req.params;
    const data = req.body;
    const file = req.file;
    const domain = req.protocol + '://' + req.headers.host;
    let url = `${domain}/images/${file.filename}`;
    const sql = `UPDATE new_product SET product_name = ?, product_price = ?, product_detail = ?, product_img = ? WHERE product_id = ?`;

    i18n.init(req, res)  
    connector.query(sql, [data.productName, data.productPrice, data.productDetail, url, product_id ], (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ success: false, message: req.__('There was an error updating data')});
        } else {
            res.status(200).json({ success: true, message: 'Data updated correctly' });
    }
      });
 };

controller.delete = (req, res) => {
    const {product_id} = req.params;

    i18n.init(req, res)  
    connector.query(`DELETE FROM new_product WHERE product_id = ?`, [product_id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: req.__('An error occurred')});
        } else {
            res.status(200).json({ success: true, message: 'Data deleted' });
        }
    });
};

controller.select = (req, res) => {
    const {product_id} = req.params;
    const query = `SELECT *, product_img FROM new_product WHERE product_id = ?`;

    i18n.init(req, res)  
    connector.query(query, [product_id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json(req.__('An error occurred'));
        } else {
            res.render('article.ejs', { data : results[0] });
      }
  });
};

module.exports = controller;