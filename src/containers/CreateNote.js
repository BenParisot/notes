import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../components/notes/NoteForm';

export default class CreateNote extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    }

    state = {
      title: '',
      body: ''
    }

    handleSubmit = event => {
      event.preventDefault();
      const { title, body } = this.state;
      this.props.onSubmit({ title, body });
      this.setState({ title: '', body: '' });
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      return (
        <NoteForm onSubmit={this.handleSubmit} onChange={this.handleChange} title={this.state.title} body={this.state.body} />
      );
    }
}
