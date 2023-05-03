const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userIMGSchema = new schema({

userImage:{type:String},
user: {
    type: mongoose.Types.ObjectId,
    ref:'UserId',
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


const UserIMG = mongoose.model('UserIMG',userIMGSchema);
module.exports=UserIMG;
