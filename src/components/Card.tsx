import { useState } from "react";
import "./Card.css";

export default function Card({}) {
  const [counter, setCounter] = useState(0);

  const clicker = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="card">
      <p>{counter}</p>
      <button onClick={clicker}>Увеличить</button>
    </div>
  );
}
