const mongoose = require("mongoose");

const getAllBlogs = async () => {
  const db = await mongoose.connection.db;
  const blogs = db.collection("blogs").find().toArray();
  return blogs;
};
module.exports = { getAllBlogs };
