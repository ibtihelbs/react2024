import React, { Component } from "react";
import "./App.css";
import Form from "./componants/Form";
import TasksManager from "./componants/TasksManager";
import ThemeSwitcher from "./componants/ThemeSwitcher";

class App extends Component {
  state = {
    theme: false,
    Tasks: [],
  };

  handleTheme = () => {
    this.setState(() => {
      return { theme: !this.state.theme };
    });
  };
  updateTasks = (updatedArr) => {
    this.setState(() => {
      return { Tasks: updatedArr };
    });
  };
  addTask = (input) => {
    this.setState((prev) => {
      return { Tasks: [...prev.Tasks, { task: input, done: false }] };
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
              Tasks={this.state.Tasks}
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
