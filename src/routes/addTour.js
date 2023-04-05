const { Tour } = require('../db/sequelize')
//const auth=require("../auth/auth")
console.log("ajout");
module.exports = (app) => {
  //app.get('/api/tours',auth, (req, res) => {
  app.post('/api/tour', (req, res) => {
    Tour.create(req.body)
    .then(tour=>{
        const message="Tournée créée"
        res.json({message,data:tour})
    })
    .catch(error=>{
        const message=`Erreur ajout, réessayez plus tard`
        res.status(500).json({message,data:error})
      })
  })
} 