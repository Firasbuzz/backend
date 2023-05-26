const mongoose=require('mongoose');
const schema=mongoose.Schema;

const seminaireSchema = new schema({
  name: { type: String},
  numIns:{ type: Number ,default:0},
  idR:{ type: String},
  NameR:{ type: String},
  description: { type: String},
  date: { type: Date},
  comite_Organisation: [String] ,
  comite_Scientifique: [String] ,
  adresse:{ type: String},
  lat:{ type: Number},
  lon:{ type: Number},
  
  prixINsPro:{ type: Number},
  prixINscher:{ type: Number},
  prixINsonli:{ type: Number},

  information:{ type: String},
  
  status: {
    type: String,
    enum : ['APPROUVÉE','EN REVUE','REJETÉE'],
    default: 'EN REVUE'
},
  

});


  const Siminaire = mongoose.model('Seminaire',seminaireSchema);
  module.exports=Siminaire;
