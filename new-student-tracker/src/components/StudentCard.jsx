import React from "react";
import { Link } from "@reach/router";
const StudentCard = ({ name, startingCohort, currentBlock, student_id }) => {
  return (
    <main className="content">
      <Link className="name" to={`/students/${student_id}`}>
        <h3 className="name"> {name}</h3>
      </Link>

      <p> Starting Cohort: {startingCohort}</p>
      <p>Current Block: {currentBlock}</p>
    </main>
  );
};

export default StudentCard;
