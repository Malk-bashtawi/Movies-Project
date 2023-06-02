import { legacy_createStore as createStore } from 'redux';
import { reducer } from '../Reducer/Reducer';
import {  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



//1-creat store
export const store = createStore(reducer,applyMiddleware(thunk)
  );
 