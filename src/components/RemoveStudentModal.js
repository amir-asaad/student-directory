import React from 'react';
import ReactModal from 'react-modal';

const RemoveStudentModal = ({ handleRemoveStudent, modal, handleClearModal }) => (
  <ReactModal
    isOpen={modal}
    contentLabel="Removing Student"
    onRequestClose={handleClearModal}
    ariaHideApp={false}
    className="remove-modal"
    overlayClassName="remove-overlayModal"
  >
    <h3>Remove Student</h3>

    <button name="yes" onClick={handleRemoveStudent}>Yes</button>
    <button name="no" onClick={handleRemoveStudent}>No</button>
    
  
  </ReactModal>
);

export default RemoveStudentModal;