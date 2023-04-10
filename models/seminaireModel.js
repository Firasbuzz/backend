const mongoose=require('mongoose');
const schema=mongoose.Schema;

const seminaireSchema = new schema({
  name: { type: String},
  description: { type: String},
  date: { type: Date},
  comite_Organisation: [String] ,
  comite_Scientifique: [String] ,
  adresse:{ type: String},
  lat:{ type: Number},
  lon:{ type: Number},
  nem_tel:{type:String},
  prixINsPro:{ type: Number},
  prixINscher:{ type: Number},
  prixINsonli:{ type: Number},
  email:{ type: String},
  information:{ type: String},
  InscriptionINFo:{type: String}
  
});


  const Siminaire = mongoose.model('Seminaire',seminaireSchema);
  module.exports=Siminaire;
