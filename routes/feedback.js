const express = require("express");
const Feedback = require("../models/feedback");

const feedbackRouter = express.Router();

//post feedback
feedbackRouter.post("/add", async (req, res) => {
  try {
    let newFeedback = new Feedback(req.body);
    let result = await newFeedback.save();
    res.send({ feedback: result, msg: "feedback is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all feedbacks
feedbackRouter.get("/all", async (req, res) => {
  try {
    let result = await Feedback.find();
    res.send({ feedback: result, msg: "all feedbacks" });
  } catch (error) {
    console.log(error);
  }
});
//get feedback by id
feedbackRouter.get("/get/:id", async (req, res) => {
  try {
    let result = await Feedback.findById(req.params.id);
    res.send({ feedback: result, msg: "one feedback" });
  } catch (error) {
    console.log(error);
  }
});
//delete feedback
feedbackRouter.delete("/delete/:id", async (req, res) => {
  try {
    let result = await Feedback.findByIdAndDelete(req.params.id);
    res.send({ msg: " feedback deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update feedback
feedbackRouter.put("/update/:id", async (req, res) => {
  try {
    let result = await Feedback.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: " feedback is updated" });
  } catch (error) {
    console.log(error);
  }
});




	module.exports = feedbackRouter;