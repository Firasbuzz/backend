var express = require("express");
var bodyParser = require("body-parser");
var multer = require('multer');
var app = express();

app.use(bodyParser.json());
var PATH='C://Users/pc/projetisg/front/IsgProject/src/assets/img'
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, PATH);
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

var upladeImage = multer({ storage : storage }).array("image",10);



var upload=app.post('/upload',function(req,res){
  upladeImage(req,res,function(err) {
       // console.log(req.body);
       // console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
       // console.log(res);
        res.end("File is uploaded");
    });
});
module.exports=upload
