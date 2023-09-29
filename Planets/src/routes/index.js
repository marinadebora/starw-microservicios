const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middleware")
const router = Router();




router.get("/",controllers.getPlanets );
router.get("/:id",controllers.getId );
router.post("/",middleware.characterValidation ,controllers.createPlanets);

module.exports = router;
