const Films = require("../data");
const { response }= require("../utils");

module.exports = async(req,res)=>{
  const objFilm = req.body
   await Films.create(objFilm);
 
  response(res,200,objFilm)
}