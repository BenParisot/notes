import { connect } from 'react-redux';
import CreateNote from '../containers/CreateNote';
import { newNote } from '../actions/createNotes';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(note) {
    dispatch(newNote(props.index, note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
