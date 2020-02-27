import React, { Component } from "react";
import Title from "./components/Title";
import StudentList from "./components/StudentList";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <NavBar />
        <Router>
          <StudentList path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
