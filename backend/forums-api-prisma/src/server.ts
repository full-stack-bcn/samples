import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import forums from './forums.js';

dotenv.config();

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/forums", forums);

const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () => {
  console.log(`Forums API listening on :${SERVER_PORT}`);
});
