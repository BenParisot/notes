import { 
  NEW_NOTE, 
  NEW_NOTE_PENDING,
  FETCH_NOTES,
  FETCH_NOTES_PENDING
 } from '../actions/createNotes';

const initialState = {
  loading: false,
  list: [] 
};
export default function(state = initialState, action) {
  switch(action.type) {
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
    case NEW_NOTE: 
      return {
        ...state,
        loading: false, 
        list: [
          ...state.list,
          action.payload
        ]
      };
    case FETCH_NOTES_PENDING:
      return { ...state, loading: true };
    case FETCH_NOTES:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
