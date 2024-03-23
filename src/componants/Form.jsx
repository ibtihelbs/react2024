import { useState } from "react";

export const Form = ({ setTasks, tasks }) => {
  const [input, setInput] = useState("");
  const sumbitTask = (ev) => {
    ev.preventDefault();

    setInput("");
    setTasks([...tasks, { task: input, done: false }]);
  };
  return (
    <form className="flex" onSubmit={sumbitTask}>
      <span></span>
      <input
        type="text"
        id="add"
        placeholder="Create new todo ...."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </form>
  );
};
