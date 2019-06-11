import { get } from './requests';

export const getNotes = () => get('/api/v1/notes');