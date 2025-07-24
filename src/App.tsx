import { useState } from "react";
import Card1 from "./components/Card.tsx";
import ToggleCard from "./components/ToggleCard.tsx";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";
import InputMirror from "./components/InputMirror.tsx";

function App() {
  const [counter, setCounter] = useState(0);

  const clicker = () => {
    setCounter(counter + 1);
  };

  const [visible, setVisible] = useState(true);

  const switcher = () => {
    setVisible(!visible);
  };

  const [theme, setTheme] = useState("light");

  const themeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [textinput, setTextinput] = useState("");

  const handleInpitChange = (e) => {
    setTextinput(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row justify-content gap:4px">
        <Card1 handleClick={clicker} counterNumber={counter} />
        <ToggleCard handleClick={switcher} toggleOnOff={visible} />
        <ThemeSwitcher handleClick={themeButton} themeButton={theme} />
        <InputMirror onChange={handleInpitChange} textinput={textinput} />
      </div>
    </>
  );
}

export default App;
