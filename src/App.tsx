import { useState } from "react";
import Card1 from "./components/Card.tsx";

function App() {
  const [counter, setCounter] = useState(0);

  const clicker = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Card1 handleClick={clicker} counterNumber={counter} />
    </>
  );
}

export default App;
