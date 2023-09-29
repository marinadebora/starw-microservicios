const Planets = require("../data");
const { response }= require("../utils");


module.exports = async(req,res)=>{
  const newPlanets = req.body
   await Planets.insert(newPlanets);
  response(res,200,newPlanets)

}