const pgp = require('pg-promise')();
require('dotenv').config()

// const cn = {
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.DATABASE_URL,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD
// };

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
      password: process.env.PG_PASSWORD,
    };

console.log(process.env, cn)

const db = pgp(cn);

// const db = pgp({
//      host: 'dpg-ci8tk8lgkuvmfnskdjfg-a.oregon-postgres.render.com',
//     port: '5432',
//     database: 'asocial_db_k91r',
//     user: 'asocial_db_k91r_user',
//     password: '0yr6H8KVmBG6BRfcfrK2p4flnlntLfIv'
// })

module.exports = db;



