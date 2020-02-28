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
    block: undefined,
    cohort: undefined,
    order: undefined,
    sort_by: undefined,
    graduated: undefined
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
    api
      .getAllStudents(
        this.state.block,
        this.state.cohort,
        this.state.order,
        this.state.sort_by,
        this.state.graduated
      )
      .then(students => {
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
      <div className="Main">
        <p></p>
        Add student:
        <StudentAdder insertStudent={this.insertStudent} />
        <p></p>
        Queries:
        <form onSubmit={this.handleSubmit}>
          <section>
            <div>
              <label>
                Select block:
                <select id="block" onChange={this.handleChange} defaultValue="">
                  <option value="">All</option>
                  <option value="fun">Fundamentals</option>
                  <option value="be">Backend</option>
                  <option value="fe">Frontend</option>
                  <option value="proj">Project</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                View by cohort:
                <input type="number" id="cohort" onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label>
                Order by:
                <select id="order" onChange={this.handleChange} defaultValue="">
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Sort by:
                <select
                  id="sort_by"
                  onChange={this.handleChange}
                  defaultValue=""
                >
                  <option value="name">name</option>
                  <option value="startingCohort">starting cohort</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Graduated:
                <select
                  id="graduated"
                  onChange={this.handleChange}
                  defaultValue=""
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </label>
            </div>
            <p></p>
            <button className="button">Submit</button>
          </section>
        </form>
        <p></p>
        Student Count: {this.state.students.length}
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
