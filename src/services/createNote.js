import { post } from './requests';

export const createNote = note => post('/api/v1/notes', note);
