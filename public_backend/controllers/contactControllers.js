const contactService = require("../services/contactSevice");

const createEnquiry = async (req, res) => {
  try {
    const data = req.body;
    const enquiry = await contactService.createEnquiry(data);
    res.status(201).json({ message: "Enquiry Details Submitted", enquiry });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { createEnquiry };
