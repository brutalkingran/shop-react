import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineMoon } from "react-icons/ai";
import { AiOutlineSun } from "react-icons/ai";

const ThemeButton = ( { size = 20 }) => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	return (
    <button onClick={() => setDarkMode( !darkMode )} className="cursor-pointer hover:bg-black hover:text-white transition bg-palette-light-500 border border-black rounded-full p-2 text-black dark:bg-palette-dark-500 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
      { darkMode ? <AiOutlineSun size={size}/> : <AiOutlineMoon size={size}/> }
    </button>
  );
}

export default ThemeButton;