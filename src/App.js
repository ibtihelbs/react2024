import { useState } from "react";
import "./App.css";
import Form from "./componants/Form";
import TasksManager from "./componants/TasksManager";
import ThemeSwitcher from "./componants/ThemeSwitcher";

function App() {
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

export default App;
