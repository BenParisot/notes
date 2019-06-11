import { createAction } from 'promise-middleware-redux';
import { createNote } from '../services/createNote';
import { getNotes } from '../services/getNotes';

export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);


export const [
  fetchNotes,
  FETCH_NOTES,
  FETCH_NOTES_PENDING,
  FETCH_NOTES_REJECTED
] = createAction('FETCH_NOTES', getNotes);
