import {createStore} from 'redux';
import './loadState';
import './saveState';


const persistedState = loadState();
const store = createStore(
  app,
  persistedState
);
store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});