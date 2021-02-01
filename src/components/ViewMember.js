import React from 'react';

const ViewMember = ({ student }) => {
  
  const { name, student_number, thesis, team } = student;

  return (
    <div className="view-member">
      <div className="view-member__flex">
        <div className="view-member__name-studentNumber">
          <h3>Name: {name}</h3>
          <h3>Student Number: {student_number}</h3>
          <br />
          <p>Thesis: {thesis}</p>
        </div>

        <img src={student.imageURL} alt={`${student.name} picture`} />
        <div className="view-member__flex__no-item"></div>      
      </div>

    </div>
  );
};

export default ViewMember;