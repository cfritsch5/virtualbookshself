import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './root_reducer';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  );
  return createStore(RootReducer, initialState, enhancer);
}

export default configureStore();
