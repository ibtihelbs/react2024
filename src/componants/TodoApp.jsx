import { Form } from "./Form";
import TasksWrap from "./TasksWrap";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState, useEffect } from "react";

const TodoApp = () => {
  const [theme, setTheme] = useState(true);
  const [tasks, setTasks] = useState([]);

  return (
    <div className="center">
      <ThemeSwitcher setTheme={setTheme} theme={theme} />
      <main>
        <Form setTasks={setTasks} tasks={tasks} />
        <section id="tasks-management">
          <TasksWrap tasks={tasks} setTasks={setTasks} />
          <hr />
          <div className="filters flex between">
            <span>items left</span>
            <div className="filter-btn">
              <button className="all">All</button>
              <button className="active">Active</button>
              <button className="completed">Completed</button>
            </div>
            <button className="clear-completed">Clear Completed</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TodoApp;
