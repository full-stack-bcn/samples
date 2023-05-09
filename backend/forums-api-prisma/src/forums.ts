import { Router } from "express";
import prisma from "./prisma-client.js";

const router = Router();

router.get("/", async (req, res) => {
  const limit = req.query["limit"];
  const skip = req.query["skip"];
  try {
    const result = await prisma.forum.findMany({
      take: Number(limit || 20),
      skip: Number(skip || 0),
    });
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({ error: e.toString() });
  }
});

router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const result = await prisma.forum.create({
      data: data,
    });
    return res.status(300).json(result);
  } catch (e) {
    return res.status(500).json({ error: e.constructor.name, msg: e.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await prisma.forum.findUnique({
      where: { id: Number(id) },
    });
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({ error: e.toString() });
  }
});

router.get("/:id/messages", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await prisma.forum.findUnique({
      where: { id: Number(id) },
      select: {
        messages: {
          select: {
            id: true,
            text: true,
            user: {
              select: {
                fullname: true,
                username: true,
              }
            }
          }
        }
      }
    });
    return res.status(200).json(result.messages);
  } catch (e) {
    return res.status(500).json({ error: e.toString() });
  }
});

router.post("/:id/messages", async (req, res) => {
  const { id } = req.params;
  const { userId, text } = req.body;
  try {
    const result = await prisma.message.create({
      data: {
        text: text,
        forum: {
          connect: {
            id: Number(id),
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    res.status(200).json({ ok: true, message: result });
  } catch (e) {
    res.status(500).json({ error: e.constructor.name, msg: e.toString() });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const forumData = req.body;
  try {
    const result = await prisma.forum.update({
      where: { id: Number(id) },
      data: forumData,
    });
    return res.status(200).send(result);
  } catch (e) {
    if (e.constructor.name === "PrismaClientValidationError") {
      res.status(400).json({ error: "Wrong data" });
    } else {
      res.status(500).json({ error: e.constructor.name, msg: e.toString() });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await prisma.forum.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ ok: true, deleted: result });
  } catch (e) {
    res.status(500).json({ error: e.constructor.name, msg: e.toString() });
  }
});

export default router;
