import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const backend = await prisma.forum.create({
  data: { name: "Backend Questions" },
});
const frontend = await prisma.forum.create({
  data: { name: "Frontend Questions" },
});

const pauek = await prisma.user.create({
  data: {
    username: "pauek",
    admin: true,
    fullname: "Pau Fernández",
  },
});

const result = await prisma.message.createMany({
  data: [
    { forumId: backend.id, text: "Qué es el Backend?", userId: pauek.id },
    { forumId: frontend.id, text: "Qué es el Frontend?", userId: pauek.id },
  ],
});
console.log(`Created ${result.count} messages`);