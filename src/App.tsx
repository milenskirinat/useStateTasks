import { useState } from "react";
import Card1 from "./components/Card.tsx";
import ToggleCard from "./components/ToggleCard.tsx";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";
import InputMirror from "./components/InputMirror.tsx";
import FullNameForm from "./components/FullNameForm.tsx";
import ShowDetails from "./components/ShowDetails.tsx";

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

  const [firstname, setFirstName] = useState("");

  const [lastname, setLastname] = useState("");

  const habdleInputNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const habdleInputLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const [details, setDetails] = useState(false);

  const switcherDetails = () => {
    setDetails(!details);
  };

  return (
    <>
      <div className="flex flex-row justify-content gap:4px">
        <Card1 handleClick={clicker} counterNumber={counter} />
        <ToggleCard handleClick={switcher} toggleOnOff={visible} />
        <ThemeSwitcher handleClick={themeButton} themeButton={theme} />
        <InputMirror onChange={handleInpitChange} textinput={textinput} />
        <FullNameForm
          onChangeName={habdleInputNameChange}
          onChangeLastName={habdleInputLastNameChange}
          firstname={firstname}
          lastname={lastname}
        />
        <ShowDetails handleClick={switcherDetails} details={details} />
      </div>
    </>
  );
}

export default App;
