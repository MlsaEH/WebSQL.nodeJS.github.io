const fs = require('fs');
// import trad_en from '../db/trad_en.json';
// import trad_fr from '../db/trad_fr.json';

 module.exports = (app) => {
    const text= {
        "en": "text in english",
        "fr": "text en français"
    }
    app.get('/api/trad', (req, res) => {  
        const locale=req.header('accept-language'); //.substring(0,2);
        //res.send({text:text[locale]})
        console.log(locale);
        switch (locale) {
            case 'fr':
                fs.readFile('C:/Mes Projets/NodeJS/WebSQL/src/db/trad_fr.json','utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }else{
                        res.send(data);
                    }
                })
                break;
            case 'en':
                fs.readFile('C:/Mes Projets/NodeJS/WebSQL/src/db/trad_en.json','utf8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return;
                    }else{
                        res.send(data);
                    }
                })
                break;
            default:
                console.log(`Sorry, no ${locale}.`);
        }
        //console.log(text);        
        //res.send(text);
    });
}