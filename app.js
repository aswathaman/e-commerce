 const express = require('express');
 const app = express();
 const cors = require('cors');
 const mongoose = require('mongoose');
 const secureRoutes = express.Router();
 const bodyParser = require('body-parser');
 const config = require('./config/config');
 const route = require('./router/router.js');
 app.use(bodyParser.urlencoded({extended: true,limit:'50mb'}));
 app.use(bodyParser.json({limit:'50mb'}));
 app.use(cors());
 app.use(secureRoutes);
 app.listen(`${config.port}`,()=>{

     console.log("node connected, Listen on " +`${config.port}`);
     mongoose.connect(`${config.db}`,{ useNewUrlParser: true , useUnifiedTopology: true,
     }).then(
         () =>{
       console.log('MongDB Connected')
       route(app)
   },err => {
    console.log('Database connection Faild'+ err.message);
   
})
 })