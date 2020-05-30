const { PORT } = require('./config');
const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors());
app.use(cookieParser()); // Parse cookies
app.use(express.urlencoded({ extended: true })); // Read POST params

// Login page is open (auth Middleware redirects here)
app.use('/login', require('./login'));

// Any routes after this middleware need authentication
app.use(require('./auth'));

// The password protected site is in the "public" directory
app.use(express.static('public'));

http.createServer(app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});