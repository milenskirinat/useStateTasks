import { useState } from "react";
import "./Card.css";

export default function ShowDetails() {
  const [details, setDetails] = useState(false);

  const switcherDetails = () => {
    setDetails(!details);
  };

  return (
    <div>
      <button onClick={switcherDetails}>Показать детали</button>
      {details && <p>Это подробности</p>}
    </div>
  );
}
