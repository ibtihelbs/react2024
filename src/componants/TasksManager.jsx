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
    this.props.updateTasks([...this.state.toDisplay]);
    console.log(this.state.toDisplay[index]);
  };
  deleteFn = (index) => {
    console.log(index);
    this.props.updateTasks([...this.state.toDisplay]);
  };
  render() {
    return (
      <section id="tasks-management">
        <div id="tasks-wrap">
          {this.state.toDisplay.map((v, index) => (
            <SingleTask
              doneFn={this.doneFn}
              key={index}
              singleTask={v}
              taskIndex={index}
              deleteFn={this.deleteFn}
            />
          ))}
        </div>
        <hr />
        {/**
         * <div className="filters flex between">
          <div>
            <span id="active-number"> {active.length} </span>
            <span> items left</span>
          </div>
          <div className="filter-btn">
            <button
              className="all"
              onClick={() => {
                setToDisplay([...Tasks]);
              }}
            >
              All
            </button>
            <button
              className="active"
              onClick={() => {
                setToDisplay([...active]);
              }}
            >
              Active
            </button>
            <button
              className="completed"
              onClick={() => {
                setToDisplay([...doneArr]);
              }}
            >
              Completed
            </button>
          </div>
          <button
            className="clear-completed"
            onClick={() => {
              setTasks([...active]);
            }}
          >
            Clear Completed
          </button>
        </div>
         */}
      </section>
    );
  }
}

export default TasksManager;
