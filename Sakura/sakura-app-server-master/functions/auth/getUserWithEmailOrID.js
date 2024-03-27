const initDb = require("./initDb");

async function getUserWithEmailOrID(emailOrID) {
    const db = await initDb();
    const [[rows]] = await db.execute("SELECT * FROM users WHERE email = ? OR id = ?", [emailOrID, emailOrID]);
    return rows;
}

module.exports = getUserWithEmailOrID;