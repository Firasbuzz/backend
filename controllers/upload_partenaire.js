var express = require("express");
var fs =require("fs")

var bodyParser = require("body-parser");
var multer = require('multer');
var app = express();

app.use(bodyParser.json());

var upload_partenaire=app.post('/upload_partenaire/:id',function(req,res){
  var id=req.params.id;
  var dir =`C://Users/pc/projetisg/front2/IsgProject/src/assets/img/partenaire/${id}`
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



// var PATH='C://Users/pc/projetisg/front/IsgProject/src/assets/img/partenaire'
// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, PATH);
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   }
// });

// var upladeImage = multer({ storage : storage }).array("image",10);



// var upload_partenaire=app.post('/upload_partenaire',function(req,res){
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
module.exports=upload_partenaire
