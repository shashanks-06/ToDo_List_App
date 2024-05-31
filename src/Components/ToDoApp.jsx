import { useEffect, useState } from "react";
import List from "./List";
import icon from "/icon.png";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn JavaScript",
      completed: true,
    },
    {
      id: 2,
      text: "Do DSA",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");

  useEffect(() => {
    window.localStorage.setItem("toDos", JSON.stringify(tasks));
  }, [tasks]);

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
      let myTask = tasks.push(newTask);
      window.localStorage.setItem("myTask", JSON.stringify(myTask));
      console.log(JSON.stringify(myTask));
    }
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  const deleteAll = () => {
    setTasks([]);
  };

  useEffect(() => {
    let localTasks = JSON.parse(window.localStorage.getItem("toDos"));
    setTasks(localTasks);
    console.log(localTasks);
  }, []);

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
        <button className="addbtn" onClick={() => addTask(text)}>Add</button>
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
      <button className="deleteAllBtn" onClick={deleteAll}>DeleteAll</button>
    </div>
  );
};

export default ToDoApp;
