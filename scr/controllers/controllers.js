const controller = {};
const {connector} = require('../../config/mysql_db')


controller.list = (req, res) => {
        let sql = 'SELECT * FROM new_product';
        connector.query(sql, (err, results) => {
            if(err) throw err;
            res.render('products.ejs', { results })
            // console.log(results)
        });
};

controller.save = (req, res) => {
    const data = req.body;

    const query = `INSERT INTO new_product (product_name, product_price, product_detail) VALUES (?, ?, ?)`;
    //   const query = `INSERT INTO new_product (product_name, product_price, product_detail) VALUES ('${productName}', ${productPrice}, '${productDetail}')`;

    connector.query(query, [data.productName, data.productPrice, data.productDetail], (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error inserting data' });
      } else {
        res.status(200).json({
          message: 'Data added correctly',
          product: {
            productName: data.productName,
            productPrice: data.productPrice,
            productDetail: data.productDetail
          }});
      }
    });
};

controller.edit = (req, res) => {
    const {product_id} = req.params;
    const query = `SELECT * FROM new_product WHERE product_id = ?`;

    connector.query(query, [product_id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json('An error occurred');
        } else {
            res.render('edit.ejs', {data : results[0]});
        }
    });
};

controller.update = (req, res) => {
    const {product_id} = req.params;
    const data = req.body;

    const query = `UPDATE new_product SET product_name = ?, product_price = ?, product_detail = ? WHERE product_id = ?`; // Its necessary to specify the parameters that is being send to db

    connector.query(query, [data.productName, data.productPrice, data.productDetail, product_id], (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'There was an error updating data' });
        } else {
          res.status(200).json({
            message: 'Data updated correctly',
            product: {
              productName: data.productName,
              productPrice: data.productPrice,
              productDetail: data.productDetail
            }
        });
    }
      });
 };


controller.delete = (req, res) => {
    const {product_id} = req.params;
    // const query = ;

    connector.query(`DELETE FROM new_product WHERE product_id = ?`, [product_id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json('An error occurred');
        } else {
            res.status(200).json('data deleted');
        }
    });
};

module.exports = controller;