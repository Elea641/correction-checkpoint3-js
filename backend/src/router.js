const { Router } = require("express");
const tilesController = require("./controllers/tilesController");
const boatsController = require("./controllers/boatsController");
const tilesExist = require("./middlewares/tilesExist");
const startGame = require("./services/startGame");

const router = Router();

router.get("/tiles", tilesController.getAll);
router.get("/boats", boatsController.getByName);
router.put("/boats/:id", tilesExist, boatsController.updatePositionOnId);

router.post("/games", startGame);

module.exports = router;
