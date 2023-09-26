const {Router}= require("express");
const router = Router();
const {validateModel} = require("../middleware") 
const {getAll, getId,createTodo} = require("../controllers")

// de esta forma utilizo el mismo get para los tres modelos
router.get("/:model",validateModel,getAll);
router.get("/:model/:id",validateModel, getId);
router.post("/:model",validateModel,createTodo);
module.exports = router