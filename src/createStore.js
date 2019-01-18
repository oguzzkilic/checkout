import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import * as reducers from './ducks';

const loggerMiddleware = createLogger();
const rootReducers = combineReducers({
  ...reducers,
  form: formReducer,
});

function configureStore() {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      typeof global.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? global.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );

  return { store };
}

export default configureStore().store;
