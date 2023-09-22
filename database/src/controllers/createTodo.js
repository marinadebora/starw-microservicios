const store = require("../dataBase");
const {response} = require("../utils");
const {selectObj}= require("../helpers")
const {Film}=require("../dataBase")

module.exports = async(req,res)=>{
  const {model}=req.params;
  const objetoBody= req.body;  
  console.log(objetoBody)
  const result = selectObj(objetoBody,model)
  const resp = await store[model].insert(result);
  //console.log(resp)
  response(res,200,resp)
}

/* module.exports = async(req,res)=>{

  const {_id,title,opening_crawl,director,producer,release_date,characters,planets}= req.body;  
  //const result = {_id,title,opening_crawl,director,producer,release_date,characters,planets }
  //const resp = await store[Film]?.insert(result)
  const resp = await Film.create(_id,title,opening_crawl,director,producer,release_date,characters,planets)
  console.log(req.body)
  response(res,200,resp)
} */