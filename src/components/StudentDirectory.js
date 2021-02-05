import React from 'react';

import json from '../students/student.json';
import default_image from '../students/images/default_image.jpg';

import Navigation from './Navigation';
import MainDisplay from './MainDisplay';
import AddStudentModal from './AddStudentModal';
import RemoveStudentModal from './RemoveStudentModal';
import UpdateStudentModal from './UpdateStudentModal';

export default class StudentDirectory extends React.Component
{
  state = {
    students: json,
    studentsInTeam: [],
    team: undefined,
    addModal: false,
    viewing: false,
    viewStudent: {
      name: '',
      student_number: '',
      thesis: '',
      team: '',
      imageURL: ''
    },
    removeModal: false,
    updateModal: false,
    errorAdd: undefined,
    errorSearch: undefined
  };

  handleClickTeam = (clickedTeam) => {
    let student = this.state.students.filter(student => clickedTeam === student.team);

    if(clickedTeam === 'All')
    {
      this.setState(() => ({
        team: undefined,
        viewing: false,
      }));
    }
    else
    {
      this.setState(() => ({
        studentsInTeam: student,
        team: clickedTeam,
        viewing: false
      }));
    }
  }

  handleAddStudentButton = () => {
    this.setState(() => ({ addModal: true }));
  };

  handleClearModal = () => {
    this.setState(() => ({ 
      addModal: false,
      removeModal: false,
      updateModal: false
    }));
  }

  handleAddStudentForm = (e) => {
    e.preventDefault();

    const foundStudentNumber = this.state.students.find(student => student.student_number === e.target.elements.studentNumber.value.trim());

    if(foundStudentNumber)
    {
      this.setState(() => ({ 
        errorAdd: 'Student number already used',
        addModal: true
      }));
    }

    else
    {
      const studentToAdd = {
        name: e.target.elements.name.value.trim(),
        student_number: e.target.elements.studentNumber.value.trim(),
        thesis: e.target.elements.thesis.value.trim(),
        team: e.target.elements.team.value.trim(),
        imageURL: default_image
      };

      this.setState((prevState) => ({
        students: prevState.students.concat(studentToAdd),
        addModal: false,
        errorAdd: undefined
      }));
    }    
  }

  handleRemoveStudentButton = (e) => {
    const studentNumber = e.target.name;
    const student = this.state.students.find(data => data.student_number === studentNumber);

    this.setState(() => ({ 
      removeModal: true,
      viewStudent: student
    }));
  }

  handleRemoveStudent = (e) => {

    if(e.target.name === 'yes')
    {
      const studentNumber = this.state.viewStudent.student_number;
      const studentOne = this.state.students.find(student => student.student_number === studentNumber);      
      const studentArray = this.state.students.filter(data => data.team === studentOne.team);

      this.setState((prevState) => ({
        students: prevState.students.filter(student => student.student_number !== studentNumber),
        studentsInTeam: studentArray.filter(student => student.student_number !== studentNumber),
        viewing: false,
        removeModal: false,
      }));
    }
    else
    {
      this.setState(() => ({ removeModal: false }))
    }
    
  };

  handleViewStudent = (student_number) => {
    const student = this.state.students.find(student => student.student_number === student_number);

    this.setState(() => ({
      viewing: true,
      team: student.team,
      viewStudent: {
        name: student.name,
        student_number: student.student_number,
        thesis: student.thesis,
        team: student.team,
        imageURL: student.imageURL
      },
      errorSearch: undefined
    }));
  };

  handleUpdateStudentButton = (student_number) => {
    const found = this.state.students.find(student => student.student_number === student_number);

    this.setState(() => ({ 
      updateModal: true,
      viewStudent: {
        name: found.name,
        student_number: found.student_number,
        thesis: found.thesis,
        team: found.team,
        imageURL: found.imageURL
      }
    }));
  };

  handleUpdateStudentForm = (e) => {
    e.preventDefault();

    let studentToUpdate = {
      name: e.target.name.value.trim(),
      student_number: e.target.student_number.value,
      thesis: e.target.thesis.value.trim(),
      team: e.target.team.value.trim(),
    };

    let indexOfStudent;

    this.state.students.map((student, index) => {
      if(student.student_number === studentToUpdate.student_number)
      {
        indexOfStudent = index;
        studentToUpdate = { ...student, ...studentToUpdate }; 
        
      }
    });

    let studentsCopy = this.state.students;
    studentsCopy.splice(indexOfStudent, 1, studentToUpdate);

    this.state.studentsInTeam.map((student, index) => {
      if(student.student_number === studentToUpdate.student_number)
      {
        indexOfStudent = index;
        studentToUpdate = { ...student, ...studentToUpdate };
      }
    });

    let studentsInTeamCopy = this.state.studentsInTeam;
    studentsInTeamCopy.splice(indexOfStudent, 1, studentToUpdate);

    this.setState(() => ({
      students: studentsCopy,
      studentsInTeam: studentsInTeamCopy,
      updateModal: false
    }), () => {
    });

    
  };

  handleOnChange = (e) => {
    this.setState((prevState) => ({
      viewStudent: {
        ...prevState.viewStudent,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleSearchStudent = (e) => {
    e.preventDefault();
    const search = e.target.search.value.toLowerCase().trim();
    let students = [];
    const searchArray = search.split(' ');

    if(search)
    {
      for(const student of this.state.students)
      {
        const studentName = student.name.toLowerCase().split(' ');
        for(const searchName of searchArray)
        {
          if(studentName.includes(searchName))
          {
            if(searchName === searchArray[searchArray.length - 1])
            {
              students.push(student);
            }
            continue;
          }
          break;
        }
      }
      
      if(students.length > 0)
      {
        this.setState(() => ({
          studentsInTeam: students,
          team: 'found',
          errorSearch: undefined,
        }));
      }
      else
      {
        this.setState(() => ({ errorSearch: 'Student Not Found' }));
      }
    }
  };

  render()
  {
    const { students, studentsInTeam, team, addModal, viewing, viewStudent, removeModal, updateModal, errorAdd, errorSearch } = this.state;

    return (
      <div className="whole-display">
        <Navigation 
          handleClickTeam={this.handleClickTeam}
        />
        <div className="main-display">
          <MainDisplay 
            students={students} 
            studentsInTeam={studentsInTeam} 
            team={team}
            handleRemoveStudentButton={this.handleRemoveStudentButton} 
            viewing={viewing}
            handleViewStudent={this.handleViewStudent}
            viewStudent={viewStudent}
            handleUpdateStudentButton={this.handleUpdateStudentButton}
            handleAddStudentButton={this.handleAddStudentButton}
            handleSearchStudent={this.handleSearchStudent}
            error={errorSearch}
          />
        </div>
        <AddStudentModal 
          handleAddStudentForm={this.handleAddStudentForm}
          modal={addModal}
          handleClearModal={this.handleClearModal}
          error={errorAdd}
        />
        <RemoveStudentModal 
          handleRemoveStudent={this.handleRemoveStudent}
          modal={removeModal}
          handleClearModal={this.handleClearModal}
        />
        <UpdateStudentModal
          handleUpdateStudentForm={this.handleUpdateStudentForm}
          modal={updateModal}
          handleClearModal={this.handleClearModal}
          student={this.state.viewStudent}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}