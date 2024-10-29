const { Router } = require("express");
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Pretty Lil Forum", messages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
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
});

module.exports = indexRouter;
    res.render("index", {messages: messages.slice(req.params.messageId, req.params.messageId + 1)});
});

module.exports = indexRouter;
