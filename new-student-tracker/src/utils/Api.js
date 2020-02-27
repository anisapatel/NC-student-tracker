const axios = require("axios");

const getAllStudents = () => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students")
    .then(({ data }) => {
      return data.students;
    });
};

module.exports = { getAllStudents };
