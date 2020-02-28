import React, { Component } from "react";
import * as api from "../utils/Api";
import { Link } from "@reach/router";
import * as utils from "../utils/utils";

class SingleStudent extends Component {
  state = {
    student: { blockHistory: [] },
    isLoading: true,
    hasGraduated: false,
    resitHistory: {}
  };

  componentDidMount() {
    api.getStudentById(this.props.student_id).then(student => {
      this.setState({ student, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const resitHistory = utils.getResitHistory(this.state.student.blockHistory);
    if (prevState.student.blockHistory !== this.state.student.blockHistory) {
      this.setState(
        currentState => {
          return { ...currentState, resitHistory: resitHistory };
        },
        () => {
          console.log(this.state.resitHistory);
        }
      );
    }
  }

  handleClick = event => {
    api.progressStudent(this.props.student_id).then(student => {
      this.setState(currentState => {
        return { student: student, hasGraduated: true };
      });
    });
  };

  handleDelClick = event => {
    api.deleteStudent(this.props.student_id);
  };

  render() {
    console.log(this.state.resitHistory);
    return (
      <div>
        <h3>Name: {this.state.student.name}</h3>
        <p>Starting Cohort: {this.state.student.startingCohort}</p>
        {this.state.student?.blockHistory.map(block => {
          return (
            <ul key={block._id}>
              <li>Number: {block.number}</li>
              <li>Block Name: {block.name}</li>
              <li>Slug: {block.slug}</li>
            </ul>
          );
        })}
        <section>
          Resit count:
          <ul>
            <li>fundamentals: {this.state.resitHistory.fun}</li>
            <li>backend: {this.state.resitHistory.be}</li>
            <li>frontend: {this.state.resitHistory.fe}</li>
          </ul>
        </section>
        <section>
          <button className="button" type="submit" onClick={this.handleClick}>
            Progress
          </button>
          <p></p>
          <button
            className="button"
            type="submit"
            onClick={this.handleDelClick}
          >
            Delete
          </button>
        </section>
      </div>
    );
  }
}

export default SingleStudent;
