import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2">
      {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}

export default ThemeButton;