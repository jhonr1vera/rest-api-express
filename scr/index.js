const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// routes
app.use(require('./routes/index'));

  app.listen(4000, () => {
    console.log(`Server on port ${app.get('port')}`); //message concatened with app.set('port') in settings
});
