import PropTypes from 'prop-types';
import React from 'react';

class Todos extends React.Component {
  static PropTypes = {
    todos: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    }
  }

  render() {
    return (
      <div>
        <h1>Your Todos!</h1>
        <div>
          <ul>
            {this.state.todos.map(todo => {
              return (
                <li>
                  <div>{todo.title}</div><hr/>
                  <div>{todo.description}</div><br/>
                  <div>{todo.deadline}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Todos;