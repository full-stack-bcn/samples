const { PORT } = require('./config');
const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

http.createServer(app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});