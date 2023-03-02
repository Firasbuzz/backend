const mongoose = require("mongoose");
const schema = mongoose.Schema;

const feedbackSchema = new schema({
  name: { type: String, required: true },
  content: { type: String, require: true },

});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;