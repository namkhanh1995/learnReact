
  const posts = require("../controllers/posts");

  var router = require("express").Router();

  // Retrieve all Tutorials
  // router.get("/", tutorials.findAll);
  // app.use("/api/tutorials", router);
  router.get('/',posts.getAllPosts);
  router.post('/', posts.createPost);

  module.exports = router;