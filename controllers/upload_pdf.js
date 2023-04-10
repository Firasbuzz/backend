var express = require("express");
var fs =require("fs")

var bodyParser = require("body-parser");
var multer = require('multer');
var app = express();

app.use(bodyParser.json());

var upload_pdf=app.post('/upload_pdf/:id',function(req,res){
  var id=req.params.id;
  var dir =`C://Users/pc/projetisg/front2/IsgProject/src/assets/docs/${id}`
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
  }) }).array("file",10)(req,res,function(err){
    if(err) {
      return res.end("Error uploading file.");
  }

  res.end("File is uploaded");
  })
 //console.log(id);

});



// var PATH='C://Users/pc/projetisg/front/IsgProject/src/assets/docs'
// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, PATH);
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   }
// });

// var upladeImage = multer({ storage : storage }).array("file",10);



// var upload_pdf=app.post('/upload_pdf',function(req,res){
//   upladeImage(req,res,function(err) {
//        // console.log(req.body);
//        // console.log(req.files);
//         if(err) {
//             return res.end("Error uploading file.");
//         }
//        // console.log(res);
//         res.end("File is uploaded");
//     });
// });
module.exports=upload_pdf
