import "./Card.css";

export default function ShowDetails({ details, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>Показать детали</button>
      {details && <p>Это подробности</p>}
    </div>
  );
}
