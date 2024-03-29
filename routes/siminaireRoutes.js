const express = require("express");

const siminaireRouter = express.Router();
const {addSemiController,addSeminaireIMGController,getAllSeminairesController,getSeminaireIMGByIdController,
  getAllSeminairesIMGController,getSeminairesByIdController,updateSeminaireStatusController} = require('../controllers/seminaireController')

siminaireRouter.route('/sim/add').post(addSemiController)
siminaireRouter.route('/sim/editstatus/:id').put(updateSeminaireStatusController)

siminaireRouter.route('/sim/img').post(addSeminaireIMGController)
siminaireRouter.route('/sim/all').get(getAllSeminairesController)
siminaireRouter.route('/sim/all/:id').get(getSeminairesByIdController)

siminaireRouter.route('/sim/img/all').get(getAllSeminairesIMGController)
siminaireRouter.route('/sim/img/all/:id').get(getSeminaireIMGByIdController)
siminaireRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await Siminaire.findByIdAndDelete(req.params.id);
    res.send({ msg: " siminaire deleted" });
  } catch (error) {
    console.log(error);
  }
});
siminaireRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await Siminaire.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " séminare is updated" });
  } catch (error) {
    console.log(error);
  }
});


const Siminaire = require("../models/seminaireModel");
module.exports = siminaireRouter;

/* const express = require("express");


const siminaireRouter = express.Router();

//post siminaire
siminaireRouter.post("/sim/add", async (req, res) => {
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
 */
