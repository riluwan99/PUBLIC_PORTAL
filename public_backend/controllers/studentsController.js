const studentsService = require("../services/studentsService");

const searchStudent = async (req, res) => {
  const id = req.body.id;
  console.log("Searching for student with ID:", id);
  try {
    const student = await studentsService.searchStudent(id);
    console.log("student is ", student);
    if (!student) {
      res.status(404).json({ message: "Student not Found !!" });
    }
    if (student.status === "Pending") {
      res
        .status(200)
        .json({ message: `${student.studentName} is been Processing...` });
    } else if (student.status === "Approved") {
      res.status(202).json({
        message: `${student.studentName} is a Certified Accountant.`,
        certificate: student.certificateFileName,
      });
    } else {
      res
        .status(406)
        .json({ message: `${student.studentName} is not Eligible.` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = { searchStudent };
