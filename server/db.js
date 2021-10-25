const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "secret",
    host: "localhost",
    database: "perntodo"
});

module.exports = pool;
