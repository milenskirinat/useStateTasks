import { useState } from "react";
import Card1 from "./components/Card.tsx";
import ToggleCard from "./components/ToggleCard.tsx";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const clicker = () => {
    setCounter(counter + 1);
  };

  const [visible, setVisible] = useState(true);

  const switcher = () => {
    console.log("Тыкнули кнопку");
    setVisible(false);
  };

  return (
    <>
      <div className="flex flex-row justify-content gap:4px">
        <Card1 handleClick={clicker} counterNumber={counter} />
        <ToggleCard handleClick={switcher} toggleOnOff={visible} />
      </div>
    </>
  );
}

export default App;
