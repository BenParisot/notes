import { connect } from 'react-redux';
import CreateNote from '../containers/CreateNote';
import { newNote } from '../actions/createNotes';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(note) {
    dispatch(newNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
