

const addUserIMGService = require('../services/usersService')



addUserIMGController=async (req,res)=>{
  
    const userImg= await addUserIMGService({...req.body})
    res.send({msg:'User image ajouté avec success',data:userImg})
  }
  module.exports = {addUserIMGController};
  