 const express=require('express');
 const cors=require('cors');
 const app=express();
 const db_connect = require("./db_connect");
 const mongoose=require('mongoose');
 require('dotenv').config();
 db_connect();
 PORT = process.env.PORT;
 app.use(cors('*'));
 app.use(express.json());
/////
//nouveau methode
//app.use("/siminaire", require("./routes/siminaireRoutes"));
const serminaireRouter=require('./routes/siminaireRoutes')
 const userRouter=require('./routes/userRoutes')
app.use("/", userRouter); 

app.use("/siminaire", serminaireRouter);

//ancien methode
app.use("/user", require("./routes/user"));
app.use("/feedback",require("./routes/feedback"));
app.use("/",require("./controllers/upload_seminaire"))
app.use("/",require("./controllers/upload_partenaire"))
app.use("/",require("./controllers/upload_pdf"))
app.use("/",require("./controllers/upload_pdf_user"))

//////
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server mriguel")
);