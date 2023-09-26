const { DatabaseError} = require("../utils/errors")

module.exports = (req,res,next)=>{
  const {model} = req.params;
  if(["Character","Film","Planet"].includes(model))return next();
  else throw new DatabaseError("error in path",401)
  
}