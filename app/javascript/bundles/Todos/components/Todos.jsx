import PropTypes from 'prop-types';
import React from 'react';

import AddTodo from './AddTodo';

class Todos extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    }
  }

  addTodoToList = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h1>Your Todos!</h1>
        <div>
          <ul style={{ marginBottom: "5px" }}>
            {this.state.todos.map(todo => {
              return (
                <li key={todo.title} style={{ marginBottom: "5px" }}>
                  <div style={{ paddingBottom: "5px", borderBottom: "1px solid LightGray" }}>{todo.title}</div>
                  <div style={{ paddingTop: "5px" }}>{todo.description}</div><br/>
                  <div>{todo.deadline}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <hr/>
        <AddTodo saveTodo={this.addTodoToList}/>
      </div>
    )
  }
}

export default Todos;