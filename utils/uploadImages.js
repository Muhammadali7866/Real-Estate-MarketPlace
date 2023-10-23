const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const proeprtyId = req.params.id;
    const uploadPath = `./propertyImages/property-${proeprtyId}`;
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        console.log(`Error while creating directory:${err}`);
      }
    });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    if (!req.count) req.count = 1;
    else req.count = req.count + 1;
    cb(null, `image-${req.count}.${ext}`);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
