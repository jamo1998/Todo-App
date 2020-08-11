import { Todo, Action, ActionTypes } from '../actions';

export const todoReducer = (
  state: Todo[] = [],
  action: Action
) => {
  if (action.type === ActionTypes.fetchTodos) {
    return action.payload;
  } else if (action.type === ActionTypes.deleteTodo) {
    return state.filter((todo: Todo) => todo.id !== action.payload);
  } else {
    return state;
  }
}