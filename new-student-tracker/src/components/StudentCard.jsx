import React from "react";

const StudentCard = ({ name, startingCohort, currentBlock }) => {
  return (
    <main>
      <h3> Name: {name}</h3>
      <p> Starting Cohort: {startingCohort}</p>
      <p>Current Block: {currentBlock}</p>
    </main>
  );
};

export default StudentCard;
