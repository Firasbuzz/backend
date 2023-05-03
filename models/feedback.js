const mongoose = require("mongoose");
const schema = mongoose.Schema;

const inscriptionSchema = new schema({
  id_S: { type: String, required: false },
  id_R: { type: String, required: false },
  id_U: { type: String, require: false },
  nom:{ type: String, require: false },
  prnom:{ type: String, require: false },
  jPaiement:{ type: String, require: false },
  addrese:{ type: String, require: false },
  Participation:{ type: String, require: false },
  
  numT:{ type: String, require: false },
  email:{ type: String, require: false },
  titerInsc:{
    type: String,
    enum : ['Spectateur','Présentateur'],
},
status: {
  type: String,
  enum : ['APPROUVÉE','EN REVUE','REJETÉE'],
  default: 'EN REVUE'
},
pdf:{ type: String  },

});

const inscription = mongoose.model("inscription", inscriptionSchema);
module.exports = inscription;