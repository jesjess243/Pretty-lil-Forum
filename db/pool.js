// db/pool.js
const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: "postgresql://prettylildb_owner:3thyxdB7nFCL@ep-curly-shadow-a5i9gspv.us-east-2.aws.neon.tech/prettylildb?sslmode=require"
});