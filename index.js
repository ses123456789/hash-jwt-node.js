const express = require ('express');
server = express();
const bodyParser = require('body-parser');
const bcryptjs = require ('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
///Creación servidor
server.get('/',(req,res)=>{
    res.send('<h1>Hola</h1>');
     
});
server.use(bodyParser.json())

server.post('/login',async (req,res) =>{
    //Datos a caregar ner postman
    console.log(req.body)
    res.status(200).json({
        message: 'correcto'
    });
    //TODO: hash del password
    //TODO: JWT user y el hash del password
    //TODO: {hash: XXXXXXXXXX, jwt: XXXXXXXXX}

     const user= req.body.user;    
     const password= req.body.password;
     console.log("user: "+user+"Password: "+password);
     let passwordhash= await bcryptjs.hash(password,8);//Asincrono    
     passwordhash:passwordhash;
  
     //res.status(200).json({   ///Visualizar hash en postman
      //  passwordhash:passwordhash
    //});
     console.log("hash: "+passwordhash);
const accessuser= generateAccessToken(user);


console.log('token: '+accessuser);

function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRET)
}

    // if(user === 'pepe' && password === '12345'){
    //     res.json({
    //         message: 'correcto'
    //     });
    // }else{
    //     res.json({
    //         message: 'incorrecto'
    //     });
    // }

});

server.listen(PORT,()=>{
    console.log("Escuchando desde el puerto "+PORT)
});