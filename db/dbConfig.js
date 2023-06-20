const pgp = require('pg-promise')();
require('dotenv').config()

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.DATABASE_URL,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    connectionString: process.env.DATABASE_URL,
};

console.log(process.env, cn)

const db = pgp(cn);

module.exports = db;