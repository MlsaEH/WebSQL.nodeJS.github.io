const Service=require("node-windows").Service
const svc=new Service({
    name: "nodeBasicServer",
    description: "this is our description",
    script: "C:\\Mes Projets\\NodeJS\\WebSQL\\app.js"
})

svc.on('install',function(){
    svc.start()
})

svc.install()