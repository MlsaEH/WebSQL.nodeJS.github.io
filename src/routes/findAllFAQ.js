const { Faq } = require('../db/sequelize')
const auth=require("../auth/auth")

// const multer=require('multer')
// const upload=multer({
//   dest:'uploads/'
// })
  
module.exports = (app) => {
  app.get('/api/faqs',(req, res) => {
    const conditionNation=req.query.conditionNation
    if(conditionNation){       
      Faq.findAll(
        {
          where:{nation:conditionNation}
        }
      ).then(faq => {
        const message = 'La liste des FAQ a bien été récupérée.'
        res.json({ message, data: faq })
      })
      .catch(error=>{
        const message=`Liste des faqs en erreur, réessayez plus tard`
        res.status(500).json({message,data:error})
      })
    }
    else{
    Faq.findAll()
      .then(faq => {
        const message = 'La liste des FAQ a bien été récupérée.'
        res.json({ message, data: faq })
      })
      .catch(error=>{
        const message=`Liste des faqs en erreur, réessayez plus tard`
        res.status(500).json({message,data:error})
      })
    }
  })
}