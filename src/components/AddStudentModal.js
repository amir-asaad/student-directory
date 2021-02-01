import React from 'react';
import ReactModal from 'react-modal';

const AddStudentModal = ({ handleAddStudentForm, modal, handleClearModal, error }) => (
  <ReactModal
    isOpen={modal}
    contentLabel="Adding Student"
    onRequestClose={handleClearModal}
    ariaHideApp={false}
    className="add-modal" 
    overlayClassName="add-overlayModal"
  >
    <button className="add--close" onClick={handleClearModal}>Close</button>
    <h1>Add Student</h1>
    <form onSubmit={ handleAddStudentForm }>
      <label htmlFor="name">
        Name: <input type="text" name="name" required />
      </label>
      <br />

      {
        error && <p className="add__error">{error}</p>
      }
      <label htmlFor="studentNumber">
        Student Number: <input type="text" name="studentNumber" required />
      </label>
      <br />

      Thesis:
        <br />
        <textarea name="thesis" rows="7" cols="40"></textarea>
        <br />
        <br />

      <label htmlFor="team">
        Team: 
        <select name="team">
          <option value="Tum">Tum</option>
          <option value="Joj">Joj</option>
          <option value="Herb">Herb</option>
          <option value="None">None</option>
        </select>
      </label>
      <br />

      <button className="add--submit">Add Student</button>
    </form>
  </ReactModal>
);

export default AddStudentModal;