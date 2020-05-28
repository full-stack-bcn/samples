import pg from "pg";

const pool = new pg.Pool();

export const query = (query) => pool.query(query);

