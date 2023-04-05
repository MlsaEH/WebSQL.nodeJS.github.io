const { Pdf } = require('../db/sequelize')
//const auth=require("../auth/auth")
const multer = require('multer');
const pdfFile = require('../models/pdf');

//Memory
const upload = multer({ storage: multer.memoryStorage() });
//Disk
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });
// const upload = multer({ storage: storage });

//console.log("ajout");
module.exports = (app) => {
  //app.get('/api/tours',auth, (req, res) => {
  app.post('/api/pdf',upload.single('pdf'),(req, res) => {
    pdfFile.filename=req.file.originalname
    pdfFile.pdf=req.file.buffer
    Pdf.create(pdfFile) 
    .then((pdf) => {
        res.status(201).json(pdf);
      })
    .catch(error=>{
        const message=`Erreur ajout, réessayez plus tard`
        res.status(500).json({message,data:error})
      })
  })
} 