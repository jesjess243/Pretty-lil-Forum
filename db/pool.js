// db/pool.js
const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.us-east-2.aws.neon.tech/prettylildb?sslmode=require`
});