import React, { useState } from "react";

const Form = ({ setTasks, Tasks }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setTasks([...Tasks, { task: input, done: false }]);
  };
  return (
    <form id="todo-form" className="flex" onSubmit={handleSubmit}>
      <span></span>
      <input
        type="text"
        id="add"
        placeholder="Create new todo ...."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
    </form>
  );
};

export default Form;
