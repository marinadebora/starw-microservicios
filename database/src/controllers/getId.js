const store = require("../dataBase");
const {response} = require("../utils")


module.exports = async (req,res)=>{
  const {model,id}=req.params;
  const resp = await store[model].getId(id)
  response(res,200,resp)

}