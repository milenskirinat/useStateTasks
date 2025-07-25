import { useState } from "react";
import Card from "./components/Card.tsx";
import ToggleCard from "./components/ToggleCard.tsx";
import "./App.css";
import ThemeSwitcher from "./components/Theme/ThemeSwitcher.tsx";
import InputMirror from "./components/InputMirror.tsx";
import FullNameForm from "./components/FullNameForm.tsx";
import ShowDetails from "./components/ShowDetails.tsx";

function App() {
  return (
    <>
      <div className="flex flex-row justify-content gap:4px">
        <Card />
        <ToggleCard />
        <ThemeSwitcher />
        <InputMirror />
        <FullNameForm />
        <ShowDetails />
      </div>
    </>
  );
}

export default App;
