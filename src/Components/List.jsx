import React from "react";

const List = ({ task, deleteTask, toggleCompleted }) => {
  const handleChange = () => {
    toggleCompleted(task.id);
  };
  return (
    <li
      className={toggleCompleted ? "checked" : ""}
      onChange={handleChange}
      onClick={task.completed}
    >
      {task.text}
      <span onClick={() => deleteTask(task.id)}>x</span>
    </li>
  );
};

export default List;
