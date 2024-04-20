import React from "react";
import SingleTask from "./SingleTask";

class TasksManager extends React.Component {
  state = {
    toDisplay: this.props.Tasks,
  };

  componentDidUpdate() {
    this.state.toDisplay = this.props.Tasks;
  }
  doneFn = (index) => {
    const newArr = [...this.state.toDisplay];
    newArr[index].done = !newArr[index].done;
    this.setState({ toDisplay: newArr });
    this.props.updateDone([...this.state.toDisplay]);
    console.log(this.state.toDisplay[index]);
  };
  active = () => {
    const updated = [...this.props.Tasks].filter((v) => !v.done);
    console.log(updated);
    this.props.updateTasks(updated);
  };
  completed = () => {
    const updated = [...this.props.Tasks].filter((v) => v.done);
    console.log(updated);
    this.props.updateTasks(updated);
  };
  reset = () => {
    this.props.updateTasks(this.props.Tasks);
  };
  render() {
    return (
      <section id="tasks-management">
        <div id="tasks-wrap">
          {this.props.arr.map((v, index) => (
            <SingleTask
              doneFn={this.doneFn}
              key={index}
              singleTask={v}
              taskIndex={index}
              deleteFn={this.props.deleteFn}
            />
          ))}
        </div>
        <hr />
        <div className="filters flex between">
          <div>
            <span id="active-number"> </span>
            <span> items left</span>
          </div>
          <div className="filter-btn">
            <button
              className="all"
              onClick={() => {
                this.reset();
              }}
            >
              All
            </button>
            <button
              className="active"
              onClick={() => {
                this.active();
              }}
            >
              Active
            </button>
            <button
              className="completed"
              onClick={() => {
                this.completed();
              }}
            >
              Completed
            </button>
          </div>
          <button className="clear-completed" onClick={() => {}}>
            Clear Completed
          </button>
        </div>
      </section>
    );
  }
}

export default TasksManager;
