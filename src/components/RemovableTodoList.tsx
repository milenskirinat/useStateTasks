import { useState } from "react";
import "./Card.css";

export default function RemovableTodoList() {
  const [task, setTask] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);

  const removeItem = (index) => {
    setTask(task.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
    <div>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
