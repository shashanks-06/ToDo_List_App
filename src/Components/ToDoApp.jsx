import List from "./List";
import icon from "/icon.png";

const ToDoApp = () => {
  return (
    <div className="todo-app">
      <h2>
        ToDo List App <img src={icon} />
      </h2>
      <div className="row">
        <input type="text" id="input-box" placeholder="Add your Text" />
        <button>Add</button>
      </div>
      <List />
    </div>
  );
};

export default ToDoApp;
