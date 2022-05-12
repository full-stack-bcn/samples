
const mongodb = require('mongodb');

const url = "mongodb://admin:fullstack@localhost:27017";
const client = new mongodb.MongoClient(url, { useUnifiedTopology: true });

async function main() {
  await client.connect();
  const db = client.db("test");
  const result = await db.collection("foo").insertMany([
    { a: 1, b: 2, c: "hola" },
    { bla: "bla", bli: "bli" },
  ]);
  console.log(result);
  client.close();
}

main();
