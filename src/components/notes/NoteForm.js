import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange, title, body }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" onChange={onChange} value={title}></input>
      <input type="text" name="body" onChange={onChange} value={body}></input>
      <button>Create Note</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default NoteForm;
