import "./Card.css";

export default function Counter({ handleClick, counterNumber }) {
  // const clicker = () => {
  //   console.log("+");
  // };

  return (
    <div className="card">
      <p>{counterNumber}</p>
      <button onClick={handleClick}>Увеличить</button>
    </div>
  );
}
