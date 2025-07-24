import "./Card.css";

export default function InputMirror({ textinput, onChange }) {
  return (
    <div>
      <input onChange={onChange} />
      <p>Your text is = {textinput}</p>
    </div>
  );
}
