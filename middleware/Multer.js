const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "uploads/"); // Specify the directory where files will be stored
    },
    filename: function (req, file, cb) {
        return cb(null, Date.now() + "-" + file.originalname); // Set filename to be current timestamp + original filename
    },
});

const upload = multer({ storage: storage });

module.exports = {upload}
