import React, { Component } from "react";
import * as api from "../utils/Api";

class StudentAdder extends Component {
  state = {
    name: "",
    startingCohort: 0
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    const { name, startingCohort } = this.state;
    event.preventDefault();
    api.postStudent(name, startingCohort).then(student => {
      this.props.insertStudent(student);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} id="name"></input>
        </label>
        <label>
          Starting Cohort:
          <input
            type="number"
            onChange={this.handleChange}
            id="startingCohort"
          ></input>
        </label>
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default StudentAdder;
