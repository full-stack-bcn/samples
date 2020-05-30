const { PASSWORD } = require("./config");
const express = require("express");
const routes = express.Router();
const tokendb = require("./tokendb");

const authMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  if (token && tokendb.hasToken(token)) {
    next();
  } else {
    res.redirect("/login");
  }
};

routes.get("/", authMiddleware, (req, res) => {
  res.send("You are accessing private content");
});

const loginPage = (message = "") => `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
  </head>
  <body>
    <p>${message}</p>
    <form action="/login" method="post">
      <p>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </p>
    </form>
  </body>
</html>
`;

routes.get("/login", (req, res) => {
  console.log("GET login");
  res.send(loginPage());
});

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

routes.post("/login", (req, res) => {
  const { password } = req.body;
  console.log("POST /login:", password);
  if (password === PASSWORD) {
    const maxAge = 12 * SECOND;
    const token = tokendb.createToken(maxAge);
    res.cookie("token", token, { maxAge });
    res.redirect("/");
  } else {
    res.send(loginPage("Incorrect password"));
  }
});

module.exports = routes;
