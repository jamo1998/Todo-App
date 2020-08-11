import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  onGetTodos = (): void => {
    this.props.fetchTodos();
  };

  renderTodoList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
    return <div key={todo.id}>{todo.title}</div>
    })
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
  { fetchTodos }
)(_App)