const { Pdf } = require('../db/sequelize')
const auth=require("../auth/auth")
// const multer=require('multer')
// const upload=multer({
//   dest:'uploads/'
// })
  
module.exports = (app) => {
  app.get('/api/pdf/:id',(req, res) => {
  //app.get('/api/faqs', (req, res) => {
    //console.log("param"+req.params.id);
    //console.log("body"+req.body.id);
    const id=parseInt(req.params.id)
    if(id>0){
      console.log(id);
      return Pdf.findAll({where:{id:id}})
      .then(faq=>{
        const message =`PDF correspondant à la recherche`
        res.json({ message, data: faq })
      })
    }    
  })
}