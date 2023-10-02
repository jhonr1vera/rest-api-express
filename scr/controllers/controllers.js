const controller = {};
const {connector} = require('../../config/mysql_db')
const  multer = require('multer')
const storage = require('../../config/multer');
const uploader = multer({storage});


controller.list = (req, res) => {
        let sql = 'SELECT * FROM new_product';
        connector.query(sql, (err, results) => {
            if(err) throw err;
            res.render('products.ejs', {title : "Product list", results })
            // console.log(results)
        });
};

// controller.search = (req, res) => { funcion searh endpoint
//   connector.query('SELECT * FROM new_product', (err, results) => {
//       if(err) throw err;
//       res.json(results)
//       data = JSON.stringify();
//       res.send
//       // console.log(results)
//   });
// }

controller.save = (req, res) => {
  const {body, file} = req;

  if(body && body.productName && body.productPrice && body.productDetail && file) {
      let url = `http://localhost:3000/images/${file.filename}`;
      const sql = `INSERT INTO new_product (product_name, product_price, product_detail, product_img) VALUES (?, ?, ?, ?)`;
      // Asume que 'connection' es tu cliente de base de datos
      connector.query(sql, [body.productName, body.productPrice, body.productDetail, url], (err, results) => {
          if(err) {
              res.status(500).json({ message: 'There was an error inserting data' });
          } else {
              res.status(200).json({
                  message: 'Data added correctly',
                  product: {
                      productName: body.productName,
                      productPrice: body.productPrice,
                      productDetail: body.productDetail,
                      productImage: url
                  }
              });
          }
      });
  } else {
      res.status(400).json({ message: 'Missing required data' });
  }
};

controller.edit = (req, res) => {
    const {product_id} = req.params;
    const query = `SELECT * FROM new_product WHERE product_id = ?`;

    connector.query(query, [product_id], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json('An error occurred');
        } else {
            res.render('edit.ejs', {title : "Product edit", data : results[0]});
        }
    });
};

controller.update = (req, res) => {

    const {product_id} = req.params;
    const data = req.body;
    const file = req.file;
    let url = `http://localhost:3000/images/${file.filename}`;

    const sql = `UPDATE new_product SET product_name = ?, product_price = ?, product_detail = ?, product_img = ? WHERE product_id = ?`; // Its necessary to specify the parameters that is being send to db

    connector.query(sql, [data.productName, data.productPrice, data.productDetail, url, product_id ], (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'There was an error updating data' });
        } else {
          res.status(200).json({
            message: 'Data updated correctly',
            product: {
              productName: data.productName,
              productPrice: data.productPrice,
              productDetail: data.productDetail,
              productImage: url
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

controller.select = (req, res) => {
  const {product_id} = req.params;
  const query = `SELECT *, product_img FROM new_product WHERE product_id = ?`;

  connector.query(query, [product_id], (error, results) => {
      if (error) {
          console.log(error);
          res.status(500).json('An error occurred');
      } else {
        res.render('article.ejs', {title : "Product", data : results[0] });
      }
  });
};

module.exports = controller;

//#region controllers temp
    // const data = req.body;

    // const query = `INSERT INTO new_product (product_name, product_price, product_detail) VALUES (?, ?, ?)`;
    // //   const query = `INSERT INTO new_product (product_name, product_price, product_detail) VALUES ('${productName}', ${productPrice}, '${productDetail}')`;

    // connector.query(query, [data.productName, data.productPrice, data.productDetail], (error, results) => {
    //   if (error) {
    //     console.log(error);
    //     res.status(500).json({ message: 'There was an error inserting data' });
    //   } else {
    //     res.status(200).json({
    //       message: 'Data added correctly',
    //       product: {
    //         productName: data.productName,
    //         productPrice: data.productPrice,
    //         productDetail: data.productDetail
    //       }});
    //   }
    // });

    // if(data) {
    //   const query = `INSERT INTO new_product (product_name, product_price, product_detail, product_img) VALUES ('${data.productName}', ${data.productPrice}, '${data.productDetail}', '${productImage}')`;
    //   res.status(200).json({
    //           message: 'Data added correctly',
    //           product: {
    //             productName: data.productName,
    //             productPrice: data.productPrice,
    //             productDetail: data.productDetail,
    //             productImage: productImage
    //           }});
    // }else{
    //   res.status(500).json({ message: 'There was an error inserting data' });
    // }


    // update:
     // const {product_id} = req.params;
    // const data = req.body;

    // const query = `UPDATE new_product SET product_name = ?, product_price = ?, product_detail = ? WHERE product_id = ?`; // Its necessary to specify the parameters that is being send to db

    // connector.query(query, [data.productName, data.productPrice, data.productDetail, product_id], (error, results) => {
    //     if (error) {
    //       console.log(error);
    //       res.status(500).json({ message: 'There was an error updating data' });
    //     } else {
    //       res.status(200).json({
    //         message: 'Data updated correctly',
    //         product: {
    //           productName: data.productName,
    //           productPrice: data.productPrice,
    //           productDetail: data.productDetail
    //         }
    //     });
    // }
    //   });

    //#endregion