const mysql = require("mysql2/promise");

module.exports = async () => {
    const db = await mysql.createConnection({
        host: process.env.IP_SERVER,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
    });

    return db;
};




