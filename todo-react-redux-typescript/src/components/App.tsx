import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  onGetTodos = (): void => {
    this.props.fetchTodos();
  };

  onDeleteTodo = (id: number): void => {
    this.props.deleteTodo(id);
  }

  renderTodoList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
          <div onClick={() => this.onDeleteTodo(todo.id)} key={todo.id}>
            {todo.title}
          </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onGetTodos}>Get Todos</button>
        {this.renderTodoList()}
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos }
}

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App)