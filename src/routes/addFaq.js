const { Faq } = require('../db/sequelize')
const auth=require("../auth/auth")
const multer=require('multer')
const { list } = require('node-windows')
var li_num=1

const storage =multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads/');
  },
  filename: function(req,file,cb){
    const date=new Date();
    li_num++;
    //const filename=date.getFullYear()+"_"+date.getUTCDay()+"_"+date.getUTCDate()+"_"+li_num;
    //filename===filename+date.getMonth()
    const filename=date.toISOString().replace(/:/g, '').slice(0, 17)+"_"+li_num;
    cb(null, filename+"_"+file.originalname);
    li_num++;
  }
})

const fileFilter=(req,file,cb)=>{
  if (file.mimetype==='image/jpeg' || file.mimetype==='image/jpg' || file.mimetype==='image/png' || file.mimetype==='application/pdf'){
    cb(null,true)
  }else{
    cb(null,false)
  }
}

const upload=multer({
  storage:storage,
  limits:{fileSize:1024*1024*4},
  fileFilter:fileFilter
})

//console.log("ajout");
module.exports = (app) => {
  //app.get('/api/tours',auth, (req, res) => {
  app.post('/api/faq',(upload.single('picture')), (req, res) => {
    console.log("fichier ajoute : "+req.file);
    if(req.file){
      req.body.picture=req.file.path
    }
    Faq.create(req.body)
    .then(ldata=>{
        const message="FAQ créée"
        res.json({message,data:ldata})
        li_num=ldata.id
    })
    .catch(error=>{
        const message=`Erreur ajout, réessayez plus tard`
        res.status(500).json({message,data:error})
      })
  })
}  