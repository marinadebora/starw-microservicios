const {response} = require("../utils");
const Planet= require("../data")


module.exports = async(req,res)=>{
  const {id}=req.params
  const planets = await Planet.getId(id);
  response(res,200,planets.data)

}