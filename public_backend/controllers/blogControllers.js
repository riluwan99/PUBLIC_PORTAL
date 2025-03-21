const blogService = require("../services/blogService");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllBlogs };
