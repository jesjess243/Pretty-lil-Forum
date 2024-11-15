// controllers/indexController.js
const db = require("../db/queries");

async function msgsGet (req, res) {
    console.log(req.params.messageId);
    const msgs = await db.getAllMsgs(req.params.messageId);
    console.log(msgs);
    
    res.render("index", {
        title: "Pretty Lil Forum",
        messages: msgs,
    });
};

async function msgsNewGet (req, res) {
    res.render("form", {
        title: "Pretty Lil Forum",
    });
};

async function msgsNewPost (req, res) {
    const msg  = req.body;
    console.log(msg.messageText);
    await db.insertMsg(msg);
    res.redirect("/");
}

module.exports = {
    msgsGet,
    msgsNewGet,
    msgsNewPost,
};