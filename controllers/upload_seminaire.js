var express = require("express");
var fs =require("fs")
var bodyParser = require("body-parser");
var multer = require('multer');
var app = express();

app.use(bodyParser.json());

var upload_seminaire = app.post('/upload_seminaire/:id',function(req,res){
  var id=req.params.id;
  var dir =`C://Users/pc/projetisg/front2/IsgProject/src/assets/img/seminaire/${id}`
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir,{recursive:true})
  }
  multer({ storage :  multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, dir);
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
  }) }).array("image",10)(req,res,function(err){
    if(err) {
      return res.end("Error uploading file.");
  }

  res.end("File is uploaded");
  })
 //console.log(id);

});


module.exports=upload_seminaire
