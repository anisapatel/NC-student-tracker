import React, { Component } from "react";
import * as api from "../utils/Api";
import Loader from "./Loader";
import StudentCard from "./StudentCard";

class StudentList extends Component {
  state = {
    students: [],
    isLoading: true
  };

  componentDidMount() {
    api.getAllStudents().then(students => {
      this.setState({ students, isLoading: false });
    });
  }

  render() {
    console.log(this.state.students);
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        {this.state.students.map(student => {
          return (
            <StudentCard
              name={student.name}
              startingCohort={student.startingCohort}
              currentBlock={student.currentBlock}
              key={student._id}
            />
          );
        })}
      </div>
    );
  }
}

export default StudentList;
