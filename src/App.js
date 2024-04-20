import React, { Component } from "react";
import "./App.css";
import Form from "./componants/Form";
import TasksManager from "./componants/TasksManager";
import ThemeSwitcher from "./componants/ThemeSwitcher";

class App extends Component {
  state = {
    theme: false,
    Tasks: [],
    arr: [],
  };
  componentDidUpdate() {
    console.log(this.state.Tasks, this.state.arr);
  }
  handleTheme = () => {
    this.setState(() => {
      return { theme: !this.state.theme };
    });
  };
  updateDone = (updatedArr) => {
    this.setState(() => {
      return { Tasks: updatedArr, arr: updatedArr };
    });
  };
  updateTasks = (updatedArr) => {
    this.setState(() => {
      return { arr: updatedArr };
    });
  };
  addTask = (input) => {
    this.setState((prev) => {
      return {
        Tasks: [...prev.Tasks, { task: input, done: false }],
        arr: [...prev.Tasks, { task: input, done: false }],
      };
    });
  };
  deleteFn = (index) => {
    console.log(index);
    const deleteArr = [...this.state.Tasks].filter((v, i) => index !== i);
    this.setState(() => {
      return { Tasks: deleteArr, arr: deleteArr };
    });
  };
  render() {
    return (
      <div className={`App ${this.state.theme ? "light-theme" : ""}`}>
        <div className="center">
          <ThemeSwitcher setTheme={this.handleTheme} theme={this.state.theme} />
          <main>
            <Form addTask={this.addTask} />
            <TasksManager
              updateTasks={this.updateTasks}
              arr={this.state.arr}
              Tasks={this.state.Tasks}
              deleteFn={this.deleteFn}
              updateDone={this.updateDone}
            />
          </main>
        </div>
      </div>
    );
  }
}

/**
 * 
 * function App() {
  const [theme, setTheme] = useState(false);
  const [Tasks, setTasks] = useState([]);
  return (
    <div className={`App ${theme ? "light-theme" : ""}`}>
      <div className="center">
        <ThemeSwitcher setTheme={setTheme} theme={theme} />
        <main>
          <Form setTasks={setTasks} Tasks={Tasks} />
          <TasksManager Tasks={Tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  );
}

*/
export default App;
