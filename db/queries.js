// db/queries.js
const pool = require("./pool");

async function getAllMsgs(msgId) {
    let { rows } = (msgId == null || msgId == '') ? 
            await pool.query('SELECT * FROM messages')
        :   await pool.query('SELECT * FROM messages WHERE id = $1', [msgId]);

    return rows;
};

async function insertMsg(msg) {
    //console.log(msg);
    await pool.query("INSERT INTO messages (name, value, added) VALUES ($1, $2, $3)", [msg.messageUser, msg.messageText, new Date()]);
};

module.exports = {
    getAllMsgs,
    insertMsg,
}