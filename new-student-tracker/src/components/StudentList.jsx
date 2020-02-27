import React, { Component } from "react";
import * as api from "../utils/Api";
import Loader from "./Loader";
import StudentCard from "./StudentCard";
import { Link } from "@reach/router";
import StudentAdder from "./StudentAdder";

class StudentList extends Component {
  state = {
    students: [],
    isLoading: true,
    block: "All",
    cohort: 0
  };

  componentDidMount() {
    api.getAllStudents().then(students => {
      this.setState({ students, isLoading: false });
    });
  }

  insertStudent = student => {
    this.setState(currentState => {
      return { students: [...currentState.students, student] };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.getAllStudents(this.state.block, this.state.cohort).then(students => {
      this.setState(currentState => {
        return { students: students, isLoading: false };
      });
    });
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState(currentState => {
      return { ...currentState, [id]: value };
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <div>
        <StudentAdder insertStudent={this.insertStudent} />
        <form onSubmit={this.handleSubmit}>
          <label>
            Select block:
            <select id="block" onChange={this.handleChange} defaultValue="">
              <option value="">All</option>
              <option value="fun">Fundamentals</option>
              <option value="be">Backend</option>
              <option value="fe">Frontend</option>
              <option value="proj">Project</option>
            </select>
            <button>Submit</button>
          </label>
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>
            View by cohort:
            <input type="number" id="cohort" onChange={this.handleChange} />
          </label>
          <button>Submit</button>
        </form>
        {this.state.students.map(student => {
          return (
            <StudentCard
              name={student.name}
              startingCohort={student.startingCohort}
              currentBlock={student.currentBlock}
              key={student._id}
              student_id={student._id}
            />
          );
        })}
      </div>
    );
  }
}

export default StudentList;
