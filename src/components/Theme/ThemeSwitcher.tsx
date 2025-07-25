import { useState } from "react";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const themeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "light" : "night"}>
      <button onClick={themeButton}>Change theme</button>
      {<p>Theme is right: {theme}</p>}
    </div>
  );
}
