const contactModel = require("../models/contactModel");

const createEnquiry = async (data) => {
  try {
    const enquiry = await new contactModel(data).save();
    return enquiry;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { createEnquiry };
