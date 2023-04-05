const { Faq } = require('../db/sequelize')
const auth=require("../auth/auth")
// const multer=require('multer')
// const upload=multer({
//   dest:'uploads/'
// })
  
module.exports = (app) => {
  app.get('/api/faqs/:id',auth, (req, res) => {
  //app.get('/api/faqs', (req, res) => {
    console.log("param"+req.params.id);
    console.log("body"+req.body.id);
    const id=parseInt(req.params.id)
    if(id>0){
      console.log(id);
      return Faq.findAll({where:{id:id}})
      .then(faq=>{
        const message =`Faqs correspondant à la recherche`
        res.json({ message, data: faq })
      })
    }
    Faq.findAll()
      .then(faq => {
        const message = 'La liste des FAQ a bien été récupérée.'
        res.json({ message, data: faq })
      })
      .catch(error=>{
        const message=`Liste des faqs en erreur, réessayez plus tard`
        res.status(500).json({message,data:error})
      }) 
  })
}