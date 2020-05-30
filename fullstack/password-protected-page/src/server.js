const { PORT } = require('./config');
const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const { authMiddleware } = require('./auth');

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Login page is open
app.use('/login', require('./login'));

// Anything else need authentication
app.use(authMiddleware);
app.use(express.static('public'));

http.createServer(app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});