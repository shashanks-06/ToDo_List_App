import { useEffect, useState } from "react";
import List from "./List";
import icon from "/icon.png";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  /*{
      id: 1,
      text: "Learn JavaScript",
      completed: true,
    },
    {
      id: 2,
      text: "Do DSA",
      completed: false,
    },*/

  const [text, setText] = useState("");

  const LOCAL_STORAGE_KEY = "myTodos";

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTasks) setTasks(storedTasks);
  }, []);

  const addTask = (text) => {
    if (text === "") {
      alert("You Must Write Something!");
    } else {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([...tasks, newTask])
      );

      setText("");
    }
  };

  const deleteTask = (id) => {
    const deleted = tasks.filter((task) => task.id !== id);
    setTasks(deleted);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(deleted));
  };

  const toggleCompleted = (id) => {
    const toggled = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(toggled);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toggled));
  };

  const deleteAll = () => {
    setTasks([]);

    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="todo-app">
      <h2>
        ToDo List App <img src={icon} />
      </h2>
      <div className="row">
        <input
          type="text"
          id="input-box"
          placeholder="Add your Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="addbtn" onClick={() => addTask(text)}>
          Add
        </button>
      </div>
      <ul className="list-container">
        {tasks.map((task) => (
          <List
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
      <button className="deleteAllBtn" onClick={deleteAll}>
        DeleteAll
      </button>
    </div>
  );
};

export default ToDoApp;
