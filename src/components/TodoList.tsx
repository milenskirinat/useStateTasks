import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  const handleTodoList = () => {
    setTask([...task, newTodo]);
    setNewTodo("");
  };

  const handleInputTodoList = (e) => {
    setNewTodo(e.target.value);
  };

  const taskToRemove = (index) => {
    setTask(task.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
    <div>
      <input value={newTodo} onChange={handleInputTodoList} />
      <button onClick={handleTodoList}>Add</button>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => taskToRemove(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
