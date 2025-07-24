import "./ThemeSwitcher.css";

export default function ThemeSwitcher({ handleClick, themeButton }) {
  return (
    <div className={themeButton === "light" ? "light" : "night"}>
      <button onClick={handleClick}>Change theme</button>
      {<p>Theme is right: {themeButton}</p>}
    </div>
  );
}
