import React from "react";

class SingleTask extends React.Component {
  task = this.props.singleTask.task;
  taskIndex = this.props.taskIndex;

  render() {
    return (
      <div className="single-task flex between">
        <div
          className="flex"
          onClick={() => {
            this.props.doneFn(this.taskIndex);
          }}
        >
          <form className="checked">
            <input
              type="checkbox"
              className="state"
              readOnly
              checked={this.props.singleTask.done}
            />
          </form>
          <p
            className={`${this.props.singleTask.done ? "lined" : "not-lined"}`}
          >
            {" "}
            {this.task}{" "}
          </p>
        </div>
        <button
          className="delete"
          onClick={() => {
            this.props.deleteFn(this.taskIndex);
          }}
        >
          <img src="./images/icon-cross.svg" alt="icon-cross" />
        </button>
      </div>
    );
  }
}

export default SingleTask;
