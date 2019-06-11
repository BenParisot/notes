import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notes from '../components/notes/Notes';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/createNotes';
import { getNotes, getNotesLoading } from '../selectors/noteSelectors';

class AllNotes extends PureComponent {
    static PropTypes = {
      notes: PropTypes.array.isRequired,
      loading: PropTypes.bool.isRequired,
      fetch: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { loading, notes } = this.props;
      if(loading) return <h1>Notes loading...</h1>;
      return <Notes notes={notes} />;
    } 
}

const mapStateToProps = state => ({
  notes: getNotes(state),
  loading: getNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(AllNotes);
