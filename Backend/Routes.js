const express = require("express");
const path = require('path');
const rootdir = require("./Utils/Rootpath");
const pug = require('pug');
// const mail = require("./Utils/Mail.html");

//creating the router fot express
const router = express.Router();


//Getting the form data to send a mail
router.post("/FORM",(req,res,next)=>{
    res.status(200);
    // res.send(pug.renderFile(path.join(rootdir,"../","Utils/Mail.pug"),{message : req.body.contact.message}));
    res.end();
})



//exporting the module
module.exports = router;