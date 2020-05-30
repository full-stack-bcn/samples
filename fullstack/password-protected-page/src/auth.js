const tokendb = require("./tokendb");

const authMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  if (token && tokendb.hasToken(token)) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = authMiddleware;
