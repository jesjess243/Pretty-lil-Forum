// routes/indexRouter.js
const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.msgsGet);
indexRouter.get("/new", indexController.msgsNewGet);
indexRouter.get("/:messageId", indexController.msgsGet);

indexRouter.post("/new", indexController.msgsNewPost);

module.exports = indexRouter;