import { useState } from "react";
import "./Card.css";

export default function MultiCounter() {
  const [counters, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]);

  const meter = (index) => {
    setCounters(
      counters.map((item, currentIndex) =>
        currentIndex === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  return (
    <div>
      <div>
        {counters.map((count, index) => (
          <p key={count.id}>
            {count.count}
            <button onClick={() => meter(index)}>+</button>
          </p>
        ))}
      </div>
    </div>
  );
}
