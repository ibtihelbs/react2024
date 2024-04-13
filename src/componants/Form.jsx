import { Component } from "react";

class Form extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.input);
    this.state.input = "";
  };

  render() {
    return (
      <form id="todo-form" className="flex" onSubmit={this.handleSubmit}>
        <span></span>
        <input
          type="text"
          id="add"
          placeholder="Create new todo ...."
          onChange={(e) => {
            this.setState({ input: e.target.value });
          }}
          value={this.state.input}
        />
      </form>
    );
  }
}

export default Form;
