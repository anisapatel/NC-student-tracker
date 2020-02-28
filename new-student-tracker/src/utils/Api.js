const axios = require("axios");

export const getAllStudents = (block, cohort, order, sort_by, graduated) => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students", {
      params: { block, cohort, order, sort_by, graduated }
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

export const progressStudent = (student_id, boolean) => {
  return axios
    .patch(
      `https://nc-student-tracker.herokuapp.com/api/students/${student_id}?progress=${boolean}`
    )
    .then(({ data }) => {
      return data.student;
    });
};

export const deleteStudent = student_id => {
  return axios.delete(
    `https://nc-student-tracker.herokuapp.com/api/students/${student_id}`
  );
};
