import { useEffect } from "react";
const SingleTask = ({ singleTask, setTasks, tasks, index }) => {
  let { task, done } = singleTask;
  let newTasks = tasks;
  const doneFn = () => {
    newTasks[index].done = !tasks[index].done;
    setTasks(newTasks);
    done = !done;
  };
  useEffect(() => {
    console.log(singleTask);
  }, [done]);

  return (
    <div className="single-task flex between">
      <div className="flex">
        <input
          type="checkbox"
          className="state"
          checked={singleTask.done}
          onChange={doneFn}
        />
        <p className={`${done ? "lined" : "regular"}`}> {task} </p>
      </div>
      <button className="delete">
        <img src="./images/icon-cross.svg" alt="icon-cross" />
      </button>
    </div>
  );
};

export default SingleTask;
