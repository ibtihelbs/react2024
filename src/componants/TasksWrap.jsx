import React from "react";
import SingleTask from "./SingleTask";

const TasksWrap = ({ tasks, setTasks }) => {
  console.log(tasks);
  return (
    <div id="tasks-wrap">
      {tasks.map((v, i) => (
        <SingleTask
          key={i}
          singleTask={v}
          setTasks={setTasks}
          index={i}
          tasks={tasks}
        />
      ))}
    </div>
  );
};

export default TasksWrap;
