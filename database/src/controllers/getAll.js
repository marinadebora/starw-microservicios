const {response} = require("../utils")
const store = require("../dataBase")


module.exports = async (req,res)=>{
  const {model}=req.params;
  const resp = await store[model].list();
  response(res,200,resp)

}