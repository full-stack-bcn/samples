const { Router } = require("express");
const { route } = require("express/lib/application");

const forumControllers = require("./forum.controllers");

const router = Router();

router
  .route("/")
  .get(forumControllers.findMany)
  .post(forumControllers.createOne);

router
  .route("/:id")
  .get(forumControllers.findOne)
  .put(forumControllers.updateOne)
  .delete(forumControllers.deleteOne);

module.exports = router;
