const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.msgsGet);
indexRouter.get("/new", indexController.msgsNewGet);
indexRouter.get("/:messageId", indexController.msgsGet);

indexRouter.post("/new", indexController.msgsNewPost);

/*indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Pretty Lil Forum", messages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render("form", {title: "New Post"});
});

indexRouter.post("/new", (req, res) => {
    console.log("Post requested!");
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    console.log("Pushed!");
    res.redirect("/");
});

indexRouter.get("/:messageId", (req, res) => {
    console.log(req.params);
    res.render("index", {title: "Pretty Lil Forum", messages: messages.slice(req.params.messageId, req.params.messageId + 1)});
});*/

module.exports = indexRouter;