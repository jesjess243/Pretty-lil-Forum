// db/queries.js
const  pool = require("./pool");

async function getAllMsgs(msgId) {
    const statement = (msgId == null || msgId == '') ? "SELECT * FROM messages" : ("SELECT * FROM messages WHERE id = "+msgId+";");
    console.log("from queries: " + statement);
    const { rows } = await pool.query(statement);
    return rows;
};

async function insertMsg(msg) {
    console.log(msg);
    await pool.query("INSERT INTO messages (name, value, added) VALUES ($1, $2, $3)", [msg.messageUser, msg.messageText, new Date()]);
};

module.exports = {
    getAllMsgs,
    insertMsg,
}