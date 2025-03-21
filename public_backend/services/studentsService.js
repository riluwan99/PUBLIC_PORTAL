const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;

const searchStudent = async (caId) => {
  if (caId) {
    throw new Error("Invalid ID format");
  }
  const db = mongoose.connection.db;
  const student = await db.collection("students").findOne({ caid: caId });
  return student;
};

module.exports = { searchStudent };
