import {merge} from 'lodash';

const BookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECIEVE_BOOKS':
      return merge({}, action.books);
    default:
      return state;
  }
};

export default BookReducer;
