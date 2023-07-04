const {Sequelize, DataTypes}=require("sequelize")
//const TourModel=require('../models/tour')
const bcrypt=require("bcrypt")
const UserModel=require('../models/user')
const FaqModel=require('../models/faq')
const PdfModel=require('../models/pdf')

// const sequelize=new Sequelize(
//     'TestEH',
//     'sa',
//     'P@ssw0rd',
//     {
//         host: 'winsql2019',
//         dialect:'mssql'
//     }
// )

// Option 1: Passing parameters separately
const sequelize = new Sequelize('TestEH', '', '', {
  dialect: 'sqlite',
  //storage: 'C:/Mes Projets/NodeJS/WebSQL/src/db/SQLite/TestEH.db'
  storage: 'C:/Mes Projets/NodeJS/WebSQL.nodeJS.github.io/src/db/SQLite/TestEH.db'
}); 
 //C:/Mes Projets/NodeJS/WebSQL/src/db/SQLite
const User=UserModel(sequelize,DataTypes) 
//const Tour=TourModel(sequelize,DataTypes) 
const Faq=FaqModel(sequelize,DataTypes) 
//const Pdf=PdfModel(sequelize,DataTypes) 
const initDB=()=>{
    return sequelize.sync({
        force: false
    })
    // .then(() => {
    //     console.log('Le modèle PDFDocument a été synchronisé avec la base de données.');
    // }).catch(error => {
    //    console.error('Erreur de synchronisation du modèle PDFDocument :', error);
    // });
    // .then(_=>{
    //      bcrypt.hash("CHEF",10)
    //      .then(hash=>{
    //          User.create({username:'MLSA',userlib:"Administrateur",password:hash})
    //          .then(user=>console.log(user.toJSON()))
    //      })
    //  })
    // .then(_=>{
    //       User.create({username:'MLSA',userlib:"Administrateur",password:hash})
    //         .then(user=>console.log(user.toJSON()))
    // })
}
module.exports={initDB,User,Faq}