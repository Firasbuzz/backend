const mongoose=require('mongoose');
const schema=mongoose.Schema;

const seminaireIMGSchema = new schema({
program:{ type: String},
partnerImage:{type:String},
seminaireImage:{type:String},
seminaire: {
    type: mongoose.Types.ObjectId,
    ref:'SeminaireId',
    required: true,
    select:true,
    

}

});
/* seminaireIMGSchema.virtual('seminaireImg',{
    ref:'Siminaire',
    localField:'_id',
    foreignField:'seminaire'
    ,justOne: false

}) */


const SiminaireIMG = mongoose.model('SeminaireIMG',seminaireIMGSchema);
module.exports=SiminaireIMG;
