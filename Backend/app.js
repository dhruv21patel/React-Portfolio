const securechannel = require("http");
const express = require('express');
const cors = require("cors");
//importing parser for html body
const parser =  require('body-parser');

//importing the predefined routes
const routes = require("./Routes");


//defining the server to use the parser
const app = express();
app.use(cors());
app.use(parser.json());


//defining the view and template engine
app.set("view engine", "pug");
app.set("views","Utils");

//form routes
app.use(routes);

//handling errors
app.use("/",(req,res,next)=>{
    res.status(404).send("<h1>PAGE NOT FOUND</h1>")
})
app.listen(3000);


