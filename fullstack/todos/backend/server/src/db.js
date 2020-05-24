const { Pool } = require("pg");

const pool = new Pool();

const query = (query) => pool.query(query);

module.exports = { query };
