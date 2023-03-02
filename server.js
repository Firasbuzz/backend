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
app.use("/user", require("./routes/user"));
app.use("/siminaire", require("./routes/siminaire"));
app.use("/feedback",require("./routes/feedback"));
app.use("/",require("./controllers/upload"))
//////
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server mriguel")
);