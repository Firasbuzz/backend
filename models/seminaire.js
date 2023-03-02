const mongoose=require('mongoose');
const schema=mongoose.Schema;

const seminaireSchema = new schema({
  name: { type: String},
  description: { type: String},
  date: { type: Date},
  comite: [String] ,
  program:{ type: String},
  sponsorImage:{type:String},
});


  const Siminaire = mongoose.model('Seminaire',seminaireSchema);
  module.exports=Siminaire;
