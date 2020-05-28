import express from "express";
import * as db from "../db.mjs";

const api = express.Router();

api.get("/todos", async (req, res) => {
  console.log("/todos");
  try {
    const { rows } = await db.query({
      text: `SELECT * FROM todos`,
    });
    res.json(rows);
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

api.post("/todos", async (req, res) => {
  try {
    const { rows } = await db.query({
      text: `
        INSERT INTO todos (text) 
          VALUES ($1) 
          RETURNING *;
      `,
      values: [req.body.text],
    });
    res.json(rows[0]);
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

api.put("/todos/:id", async (req, res) => {
  try {
    const todo = req.body;
    const { rows } = await db.query({
      text: `
        UPDATE todos SET text = $1, done = $2 
        WHERE id = $3 
        RETURNING *
      `,
      values: [todo.text, todo.done, todo.id],
    });
    res.json(rows[0]);
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

api.delete("/todos", async (req, res) => {
  try {
    const { rows } = await db.query({
      text: `
        DELETE FROM todos 
        WHERE done = true 
        RETURNING *
      `,
    });
    res.json(rows);
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

api.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query({
      text: `
        DELETE FROM todos WHERE id = $1 
        RETURNING *
      `,
      values: [id],
    });
    res.json(rows[0]);
  } catch (e) {
    res.json({ error: e.toString() });
  }
})

export default api;