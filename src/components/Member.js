import React from 'react';

const Member = ({ student, handleViewStudent, handleRemoveStudentButton, handleUpdateStudentButton, selectedTeam }) => {
  const { name, student_number, thesis , team, imageURL } = student;
  
  const viewStudent = () => {
    handleViewStudent(student_number);
  };

  const updateStudentButton = () => {
    handleUpdateStudentButton(student_number);
  };

  return (
    <tbody className="table__body">
        <tr className="body__row">
          <td onClick={viewStudent}>
            <div className="row__image-name">
              <img src={imageURL} />
              <p>{student.name}</p>
            </div>
          </td>
          <td onClick={viewStudent}>{student_number}</td>
          {
            !selectedTeam && <td onClick={viewStudent}>{team}</td>
          }
          <td>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveStudentButton(e)
                }}
              name={student.student_number}
            >Remove
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                updateStudentButton();
            }}
              name={student.student_number}
            >Update
            </button>
          </td>
        </tr>
      </tbody>      
  );
}

export default Member;