import React from 'react';

const ViewMember = ({ student }) => {
  
  const { name, student_number, thesis, team } = student;

  return (
    <div className="view-member">
      <div className="view-member__first">
        <div className="first__wrapper">
          <h3 className="view-member__name">{name}</h3>
          <h3 className="view-member__studentNumber">{student_number}</h3>
        </div>
          <img className="view-member__image" src={student.imageURL} alt={`${student.name} picture`} />                
      </div>

      <p className="view-member__thesis-header">Thesis</p>
      <p className="view-member__thesis">{thesis}</p>   

    </div>
  );
};

export default ViewMember;