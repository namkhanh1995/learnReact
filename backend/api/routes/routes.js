
  const posts = require("../controllers/posts");

  var router = require("express").Router();

  router.get('/',posts.getAllPosts);
  router.post('/', posts.createPost);
  router.post('/update', posts.updatePost);

  module.exports = router;