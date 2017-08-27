import {merge} from 'lodash';

const BookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
    // console.log(" in reducer:",action.books);
      return merge({}, action.books);
    case 'UPDATE_BOOK_POSITION':
    return state;
    default:
      return state;
  }
};

export default BookReducer;
