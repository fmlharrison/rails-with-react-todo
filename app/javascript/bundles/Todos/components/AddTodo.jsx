import PropTypes from "prop-types";
import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      deadline: ""
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    this.props.saveTodo(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            value={this.state.deadline}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
