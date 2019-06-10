import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" onChange={onChange}></input>
      <input type="text" name="body" onChange={onChange}></input>
      <button>Create Note</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NoteForm;
