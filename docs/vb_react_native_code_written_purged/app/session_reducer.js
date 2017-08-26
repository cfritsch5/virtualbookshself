// import {
//   RECEIVE_CURRENT_USER,
//   RECEIVE_ERRORS
// } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case "RECEIVE_CURRENT_USER":
      let currentUser;
      if (action.currentUser){
        currentUser = {
          id: action.currentUser.id,
          username: action.currentUser.username
        };
      }
      return Object.assign({}, nullUser, {
        currentUser
      });

    case "RECEIVE_ERRORS":
      const errors = action.errors;
      return Object.assign({}, nullUser, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
