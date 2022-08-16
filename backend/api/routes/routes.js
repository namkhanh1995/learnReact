module.exports = app => {
  const tutorials = require("../controllers/productsController");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  app.use("/api/tutorials", router);
};