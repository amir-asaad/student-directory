import React from 'react';
import ReactModal from 'react-modal';

const UpdateStudentModal = ({ handleUpdateStudentForm, modal, handleClearModal, student, handleOnChange }) => {
  const { name, student_number, thesis, team, imageURL } = student;

  return (
    <ReactModal
      isOpen={modal}
      contentLabel="Update Student"
      onRequestClose={handleClearModal}
      ariaHideApp={false}
      className="update-modal"
      overlayClassName="update-overlayModal"
    >
      <button className="update--close" onClick={handleClearModal}>Close</button>
      <h1>Update Student</h1>
      <form onSubmit={ handleUpdateStudentForm }>
        <label htmlFor="name">
          Name: <input type="text" name="name" value={name} onChange={handleOnChange} />
        </label>
        <br />

        <label htmlFor="studentNumber">
          <input type="hidden" name="student_number" value={student_number} />
        </label>
        <br />
        
        Thesis:
        <br />
        <textarea name="thesis" rows="7" cols="40" value={thesis} onChange={handleOnChange}></textarea>
        <br />
        <br />

        <label htmlFor="team">
          Team: 
          <select name="team" value={team} onChange={handleOnChange}>
            <option value="Tum">Tum</option>
            <option value="Joj">Joj</option>
            <option value="Herb">Herb</option>
            <option value="None">None</option>
          </select>
        </label>
        <br />
        <br />

        <button className="update--submit">Update Student</button>
      </form>

      
      
    
    </ReactModal>
  );
}

export default UpdateStudentModal;