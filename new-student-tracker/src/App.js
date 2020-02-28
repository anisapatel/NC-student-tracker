import React, { Component } from "react";
import Title from "./components/Title";
import StudentList from "./components/StudentList";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SingleStudent from "./components/SingleStudent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <NavBar />
        <Router>
          <Home path="/" />
          <StudentList path="/students/" />
          <SingleStudent path="/students/:student_id" />
        </Router>
      </div>
    );
  }
}

export default App;
