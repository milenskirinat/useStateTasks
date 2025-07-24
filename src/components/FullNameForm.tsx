import "./Card.css";

export default function FullNameForm({
  firstname,
  lastname,
  onChangeName,
  onChangeLastName,
}) {
  return (
    <div>
      <input onChange={onChangeName} placeholder="Имя" />
      <input onChange={onChangeLastName} placeholder="Фамилия" />
      <p>
        Привет, {firstname} {lastname} !
      </p>
    </div>
  );
}
