import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import BookShelf from './bookshelf';
import {logout } from '../session/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: user => dispatch(logout(user))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf));
