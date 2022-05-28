const { Pool } = require("pg");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = require("./config");

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

const getForumListSQL = `
  SELECT * FROM forums
`;
const getForumList = async () => {
  const { rows } = await pool.query(getForumListSQL);
  return rows;
};

const createForumSQL = `
  INSERT INTO forums (name) VALUES ($1)
    RETURNING *
`;
const createForum = async (name) => {
  const { rows } = await pool.query(createForumSQL, [name]);
  return rows[0];
};

const getForumSQL = `
  SELECT * FROM forums WHERE forum_id = $1
`;
const getForum = async (forumid) => {
  const { rows } = await pool.query(getForumSQL, [forumid]);
  if (rows.length === 0) {
    return null;
  }
  return rows[0];
};

const updateForumSQL = `
  UPDATE forums SET name = $2
    WHERE forum_id = $1
    RETURNING *
`;
const updateForum = async (forumid, { name }) => {
  const { rows } = await pool.query(updateForumSQL, [forumid, name]);
  if (rows.length === 0) {
    return null;
  }
  return rows[0];
};

module.exports = {
  getForumList,
  createForum,
  getForum,
  updateForum,
};
