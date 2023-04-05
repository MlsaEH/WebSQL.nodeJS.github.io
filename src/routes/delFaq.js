const { Faq } = require('../db/sequelize')
const auth=require("../auth/auth")
const fs = require('fs');
//console.log("ajout");
module.exports = (app) => {
  //app.get('/api/tours',auth, (req, res) => {
  app.delete('/api/faqs/:id',auth, (req, res) => {
    Faq.findByPk(req.params.id).then(faq=>{
        const faqDeleted=faq;
        if (faq.picture){
            console.log("suppr=>"+faq.picture)
            fs.unlink(faq.picture, (err) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log(`Le fichier ${faq.picture} a été supprimé avec succès.`);
              });
        }
        Faq.destroy({
            where: {id:faq.id}
            })
            .then(_=>{
                const message="FAQ supprimée"
                res.json({message,data:faqDeleted})
            })
        }).catch(error=>{
            const message=`Non trouvée`
            res.status(500).json({message,data:error})
          }) 
    })
}