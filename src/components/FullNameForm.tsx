import { useState } from "react";
import "./Card.css";

export default function FullNameForm() {
  const [firstname, setFirstName] = useState("");

  const [lastname, setLastname] = useState("");

  const habdleInputNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const habdleInputLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  return (
    <div>
      <input onChange={habdleInputNameChange} placeholder="Имя" />
      <input onChange={habdleInputLastNameChange} placeholder="Фамилия" />
      <p>
        Привет, {firstname} {lastname} !
      </p>
    </div>
  );
}
