
const {addSeminaireservice,addSeminaireIMGService
  ,getAllSeminaireService,
  getAllSeminaireIMGService,
  getSeminairebyIdservice,getSeminaireIMGByIdservice} =require ('../services/seminaireService')

const addSemiController=async (req,res)=>{
    const seminaire= await addSeminaireservice({...req.body})
    res.send({msg:'seminaire ajouté avec success',data:seminaire})
}

addSeminaireIMGController=async (req,res)=>{
  
  const seminaireImg= await addSeminaireIMGService({...req.body})
  res.send({msg:'seminaire image ajouté avec success',data:seminaireImg})
}


  const getAllSeminairesController=async (req,res)=>{
    const seminaire= await getAllSeminaireService()
    res.send(seminaire)
}

const getAllSeminairesIMGController=async (req,res)=>{
  const seminaire= await getAllSeminaireIMGService()
  res.send(seminaire)
}
const getSeminairesByIdController=async (req,res)=>{
  const id= req.params.id
  const seminaire= await getSeminairebyIdservice(id)
  res.send(seminaire)
}
getSeminaireIMGByIdController=async (req,res)=>{
  const id= req.params.id
  const seminaire= await getSeminaireIMGByIdservice(id)
  const semiById=await getSeminairebyIdservice(id)
 //const seminById= await getSeminairesByIdController(seminaire.map(x=>x.seminaire)[0])
  res.send({img:seminaire,sem:semiById})
}
module.exports = {addSemiController,addSeminaireIMGController,
  getAllSeminairesController,getAllSeminairesIMGController,
  getSeminairesByIdController,getSeminaireIMGByIdController};


/* const express = require("express");
const Siminaire = require("../models/seminaire");

const siminaireRouter = express.Router();

//post siminaire
const addSeminaire  =  siminaireRouter.post("/sim/add", async (req, res) => {
  try {
    let newSiminaire = new Siminaire(req.body);
    let result = await newSiminaire.save();
    res.send({ siminaire: result, msg: "siminaire is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all siminaires
siminaireRouter.get("/all", async (req, res) => {
  try {
    let result = await Siminaire.find();
    res.send({ siminaire: result, msg: "all siminaires" });
  } catch (error) {
    console.log(error);
  }
});
//get siminaire by id
siminaireRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await Siminaire.findById(req.params.id);
    res.send({ siminaire: result, msg: "one siminaire" });
  } catch (error) {
    console.log(error);
  }
});
//delete siminaire
siminaireRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await Siminaire.findByIdAndDelete(req.params.id);
    res.send({ msg: " siminaire deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update siminaire
siminaireRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await Siminaire.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " siminaire is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = siminaireRouter; */