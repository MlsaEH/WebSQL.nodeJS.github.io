// const https = require('https');
// const fs = require('fs');
const port =process.env.PORT || 3055
// const options = {
//   key: fs.readFileSync('./src/auth/key.pem'),
//   cert: fs.readFileSync('./src/auth/cert.pem')
// };
//https.createServer(options, (req, res) => {
//Youtube : https://www.youtube.com/watch?v=NRxzvpdduvQ
//Sources : https://www.alexandria-library.co/ressources-nodejs-sql/
const express=require("express");
const morgan=require("morgan")
//const favicon=require("serve-favicon")
const bodyParser=require("body-parser")
const cors = require("cors");
const requestIp = require('request-ip');
const app=express(); 
const sequelize=require("./src/db/sequelize")

app //.use(favicon(__dirname+'/favicon.ico'))
   .use(morgan('dev'))
   .use(bodyParser.json())
   .use(cors())
   .use('/uploads',express.static('uploads'))
   //.use((req,res,next)=>{console.log(`url: ${req.url}`);next()})

// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
//    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); //, Authorization');
//    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//    next();
// });

app.use(requestIp.mw());

sequelize.initDB()

require('./src/routes/login')(app)
require('./src/routes/findAllTour')(app)
// require('./src/routes/findTourByPk')(app)
// require('./src/routes/createTour')(app)
// require('./src/routes/updateTour')(app)
// require('./src/routes/deleteTour')(app)
require('./src/routes/addTour')(app) 

//FAQ
require('./src/routes/findAllFAQ')(app) 
require('./src/routes/findFaqById')(app)
require('./src/routes/addFaq')(app) 
require('./src/routes/delFaq')(app) 
require('./src/routes/addPdf')(app) 
require('./src/routes/getPdf')(app) 
//IP
require('./src/routes/ip')(app) 
//Traduction
require('./src/routes/trad')(app)

app.use(({res})=>{
   const message='Impossible de trouver la ressource'
   res.status(404).json({message})
})

//
app.listen(port,()=>console.log(`demarré port ${port}`))

//    require('./src/routes/findAllTour')(app);
//    //res.writeHead(200);
//    //res.end('Hello World!');
// }).listen(port,()=>console.log("demarré"));

