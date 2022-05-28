const { Router } = require("express");
const db = require("./db");
const forums = Router();

forums.get("/", async (req, res) => {
  try {
    const forumList = await db.getForumList();
    res.status(200).json(forumList);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

forums.post("/", async (req, res) => {
  // 1. Obtener datos del body de la petición (con ayuda de express.json que hace JSON.parse)
  const data = req.body;
  // 2. Validar que el objeto que nos envían cumple con lo que necesitamos ({ name: "xxx" })
  const { name } = data;
  if (!name) {
    return res.status(400).json({ error: "Missing or wrong 'name' field" });
  }
  try {
    // 3. Crear el foro en la base de datos
    const newForum = await db.createForum(name);
    // 4. Contestar en JSON
    res.status(200).json(newForum);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

forums.get("/:forumid", async (req, res) => {
  const { forumid } = req.params;
  try {
    const forum = await db.getForum(forumid);
    if (forum === null) {
      res.status(400).send({ error: `Forum with ID ${forumid} not found.` });
    } else {
      res.status(200).send(forum);
    }
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

forums.put("/:forumid", async (req, res) => {
  const { forumid } = req.params;
  const forumData = req.body;
  // Validar!! (esto es muuuuy cutre...)
  if (!forumData.name) {
    return res.status(400).json({ error: "Missing or wrong 'name' field" });
  }
  try {
    const updatedForum = await db.updateForum(forumid, forumData);
    if (updatedForum === null) {
      res.status(400).send({ error: `Forum with ID ${forumid} not found.` });
    } else {
      res.status(200).send(updatedForum);
    }
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = forums;
