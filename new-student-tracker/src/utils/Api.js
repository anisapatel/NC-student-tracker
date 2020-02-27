const axios = require("axios");

export const getAllStudents = query => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students", {
      params: { block: query, cohort: query }
    })
    .then(({ data }) => {
      return data.students;
    });
};

export const getStudentById = student_id => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students/${student_id}`)
    .then(({ data }) => {
      return data.student;
    });
};

export const postStudent = (name, startingCohort) => {
  return axios
    .post("https://nc-student-tracker.herokuapp.com/api/students/", {
      name,
      startingCohort
    })
    .then(({ data }) => {
      return data.student;
    });
};

export const progressStudent = student_id => {
  return axios
    .patch(
      `https://nc-student-tracker.herokuapp.com/api/students/${student_id}?progress=true`
    )
    .then(({ data }) => {
      return data.student;
    });
};
