import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineMoon } from "react-icons/ai";
import { AiOutlineSun } from "react-icons/ai";

const ThemeButton = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	return (
    <button onClick={() => setDarkMode( !darkMode )} className="bg-palette-light-500 border border-black rounded-full p-2 text-black dark:bg-palette-dark-500 dark:text-white dark:border-white">
      { darkMode ? <AiOutlineSun size={20}/> : <AiOutlineMoon size={20}/> }
    </button>
  );
}

export default ThemeButton;