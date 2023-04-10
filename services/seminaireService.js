const Seminaire= require('../models/seminaireModel')
const SeminaireImg= require('../models/SeminaireIMG')


const addSeminaireservice= (data)=>{
    const seminaire=Seminaire.create(data)
    return seminaire
}

const addSeminaireIMGService= (data)=>{
    const seminaireImg=SeminaireImg.create(data)
    return seminaireImg
}

const getAllSeminaireService= ()=>{
    
    return Seminaire.find()
}
const getAllSeminaireIMGService= (id)=>{
  //  const seminaire= SeminaireImg.findById(id)
  //  console.log(seminaire);
    //return
    const seminaire= SeminaireImg.find()
    return seminaire
}

const getSeminairebyIdservice=async (id)=>{
    const seminaire= Seminaire.findById(id)

  return seminaire
}
const getSeminaireIMGByIdservice= (id)=>{
     
  const semImg =   SeminaireImg.find({seminaire:id})


  return semImg

  
}


module.exports={addSeminaireservice,addSeminaireIMGService,
    getAllSeminaireService,getAllSeminaireIMGService,
    getSeminairebyIdservice,getSeminaireIMGByIdservice}