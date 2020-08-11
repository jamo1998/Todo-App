import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todoReducer
});