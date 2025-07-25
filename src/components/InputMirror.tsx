import { useState } from "react";
import "./Card.css";

export default function InputMirror() {
  const [textinput, setTextinput] = useState("");

  const handleInpitChange = (e) => {
    setTextinput(e.target.value);
  };

  return (
    <div>
      <input onChange={handleInpitChange} />
      <p>Your text is = {textinput}</p>
    </div>
  );
}
