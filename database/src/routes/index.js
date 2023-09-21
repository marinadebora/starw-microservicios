const {Router}= require("express");
const store = require("../dataBase")
const router = Router();
const {validateModel} = require("../middleware") 


// de esta forma utilizo el mismo get para los tres modelos
router.get("/:model",validateModel,async(req,res)=>{ 
  const {model}=req.params;
  const response = await store[model].list()
  res.status(200).json(response)
})

module.exports = router