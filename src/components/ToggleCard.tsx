import { useState } from "react";
import "./Card.css";

export default function ToggleText() {
  const [visible, setVisible] = useState(true);

  const switcher = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={switcher}>Show/Hide</button>
      {visible && <p>This is text</p>}
    </div>
  );
}
