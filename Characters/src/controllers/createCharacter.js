const Character = require("../data");
const {response}= require("../utils")

module.exports = async (req,res)=>{  
  const newCharacter = req.body
  await Character.insert(newCharacter);   
  response(res,200,newCharacter)
}