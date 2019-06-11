import React, { PureComponent } from 'react';
import { login } from '../../services/auth';
import { connect } from 'react-redux';
import { getToken } from '../../selectors/sessionSelectors';
import PropTypes from 'prop-types';

export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }

    componentDidMount() {
      if(!this.props.token){
        login();
      }
    }

    render() {
      if(!this.props.token) return <h1>Yer Not Logged In Mate</h1>;
      return <Component />;
    }
  }

  const mapStateToProps = state => ({
    token: getToken(state)
  });

  return connect(
    mapStateToProps 
  )(WithSession);
};
