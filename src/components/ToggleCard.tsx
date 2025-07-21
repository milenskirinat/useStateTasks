import "./Card.css";

export default function ToggleText({ handleClick, toggleOnOff }) {
  return (
    <div>
      <button onClick={handleClick}>Show/Hide</button>
      {toggleOnOff && <p>This is text</p>}
    </div>
  );
}
