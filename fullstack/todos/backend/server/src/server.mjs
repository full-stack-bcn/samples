
import { FRONTEND_DIR, PORT } from './config.mjs';
import express from 'express';
import cors from 'cors';
import http from 'http';
import api from './api/index.mjs';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(FRONTEND_DIR));
app.use('/api', api);

http.createServer(app).listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
