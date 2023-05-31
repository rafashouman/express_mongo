module.exports = app => {
  const blogs = require("../controllers/blog.controller.js");

  var router = require("express").Router();

  // Create a new Blog
  router.post("/", blogs.create);

  // Retrieve all Blogs
  router.get("/", blogs.findAll);

  // Retrieve all published Blogs
  router.get("/published", blogs.findAllPublished);

  // Retrieve a single Blog with id
  router.get("/:id", blogs.findOne);

  // Update a Blog with id
  router.put("/:id", blogs.update);

  // Delete a Blog with id
  router.delete("/:id", blogs.delete);

  // Create a new Blog
  router.delete("/", blogs.deleteAll);

  app.use("/api/blog", router);
};
