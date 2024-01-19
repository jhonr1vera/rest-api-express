const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../scr/public/img'))
    },
    filename: function (req, file, cb){
        cb(null, `images${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

module.exports = multer({ storage: storage });