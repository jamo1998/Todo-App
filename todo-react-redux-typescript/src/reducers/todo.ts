import { Todo, FetchTodosAction, DeleteTodoAction, ActionTypes } from '../actions';

export const todoReducer = (
  state: Todo[] = [],
  action: FetchTodosAction | DeleteTodoAction
) => {
  if (action.type === ActionTypes.fetchTodos) {
    return action.payload;
  } else {
    return state;
  }
}