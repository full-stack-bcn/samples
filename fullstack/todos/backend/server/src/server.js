
const { FRONTEND_DIR, PORT } = require('./config');
const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const api = require('./api');

app.use(express.json());
app.use(cors());
app.use(express.static(FRONTEND_DIR));
app.use('/api', api);

http.createServer(app).listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
