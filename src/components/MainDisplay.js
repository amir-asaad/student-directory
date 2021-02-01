import React from 'react';

import MainHeader from './MainHeader';
import Member from './Member';
import ViewMember from './ViewMember';
import SearchStudent from './SearchStudent';

const MainDisplay = ({ students, studentsInTeam, team, handleRemoveStudentButton, viewing, handleViewStudent, viewStudent, handleUpdateStudentButton, handleAddStudentButton, handleSearchStudent, error }) => {
  const tableMembers = (team) => {
    return (
      <table className="table">
        <thead className="table__header">
          <tr>
            <th>Name</th>
            <th>Student Number</th>
            {
              !team && <th>Team</th>
            }
            <th>Action</th>
          </tr>
        </thead>
        {
          team ? 
            studentsInTeam.map(student => 
              <Member 
                key={student.student_number} 
                student={student} 
                handleViewStudent={handleViewStudent} 
                handleRemoveStudentButton={handleRemoveStudentButton} 
                handleUpdateStudentButton={handleUpdateStudentButton} 
                selectedTeam={team} 
              />) : 
                students.map(student => 
                  <Member 
                    key={student.student_number} 
                    student={student} 
                    handleViewStudent={handleViewStudent} 
                    handleRemoveStudentButton={handleRemoveStudentButton} 
                    handleUpdateStudentButton={handleUpdateStudentButton} 
                  />)
        }
      </table>
    )
  };

  return (
    <div>
      <MainHeader />
      <div>
          { !viewing && (
              <div className="main-display__header">
                  <h2 className="header__header">Members</h2>
                  <button className="header--addStudent" onClick={handleAddStudentButton}>+ Add Student</button>
                <SearchStudent handleSearchStudent={handleSearchStudent} error={error} />
              </div>) 
          }
      </div>
      <div>
        {
          ( viewing && !!team ) ? <ViewMember student={viewStudent} /> : tableMembers(team)     
        }       
      </div>
    </div>
  );
};

export default MainDisplay;