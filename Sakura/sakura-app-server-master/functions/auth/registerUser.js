const initDb = require('./initDb');


async function registerUser(pseudo, email, hashedPassword) {
    const db = await initDb();
    const { nanoid } = await import("nanoid");
    const id = nanoid();
    try {
        await db.execute("INSERT INTO users (id, pseudo, email, password) VALUES (?, ?, ?, ?)", [id, pseudo, email, hashedPassword]);
        return id;
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = registerUser