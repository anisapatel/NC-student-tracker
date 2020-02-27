import React, { Component } from "react";
import * as api from "../utils/Api";
import { Link } from "@reach/router";

class SingleStudent extends Component {
  state = {
    student: { blockHistory: [] },
    isLoading: true,
    hasGraduated: false
  };

  componentDidMount() {
    api.getStudentById(this.props.student_id).then(student => {
      this.setState({ student, isLoading: false });
    });
  }

  handleClick = event => {
    api.progressStudent(this.props.student_id).then(student => {
      this.setState(currentState => {
        return { student: student, hasGraduated: true };
      });
    });
  };

  render() {
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
          <button type="submit" onClick={this.handleClick}>
            Progress
          </button>
        </section>
      </div>
    );
  }
}

export default SingleStudent;
