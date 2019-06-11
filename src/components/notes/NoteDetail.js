import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({ note }) {
  return (
        <>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
        </>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};
