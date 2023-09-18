const {PlanetsError} = require("../utils/Errors");

module.exports = (req,res,next)=>{
  const {name}= req.body;
  if(name)return next();
  else  throw new PlanetsError("Error en el nombre",401)
}