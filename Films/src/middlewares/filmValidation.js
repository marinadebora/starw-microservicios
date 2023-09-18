const {FilmError} = require("../utils/errors");

module.exports = (req,res,next)=>{
  const name = req.body;
  if(name)return next();
  else throw new FilmError("Error en el nombre",401);
}