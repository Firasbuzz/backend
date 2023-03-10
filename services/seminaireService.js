const Seminaire= require('../models/seminaireModel')


const addSeminaireservice= (data)=>{
    const seminaire=Seminaire.create(data)
    return seminaire
}




module.exports={addSeminaireservice}