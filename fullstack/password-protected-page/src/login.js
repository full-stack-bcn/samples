const { PASSWORD } = require("./config");
const express = require("express");
const routes = express.Router();
const tokendb = require("./tokendb");

const loginPage = (message = "") => `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eef;
        font-family: sans-serif;
      }
      form {
        text-align: center;
      }
      input {
        margin-top: .2rem;
        padding: .2rem .3rem;
      }
    </style>
  </head>
  <body>
    <p>${message}</p>
    <form action="/login" method="post">
      <p>
        <label>
          Password <br>
          <input type="password" name="password" />
        </label>
      </p>
    </form>
  </body>
</html>
`;

routes.get("/", (req, res) => {
  console.log("GET login");
  res.send(loginPage());
});

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

routes.post("/", (req, res) => {
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
