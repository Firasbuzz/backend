const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema = new schema({
  name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  isAdmin: { type: Boolean, default: false },
  isResp: { type: Boolean, default: false },
  grade:{type:String}
});
 

  const User = mongoose.model('User',userSchema);
  module.exports=User;