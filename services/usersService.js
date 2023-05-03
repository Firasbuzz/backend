const UserIMG = require('../models/UserIMG')


const addUserIMGService= (data)=>{
  const userImg=UserIMG.create(data)
  return userImg
}

module.exports=addUserIMGService
 