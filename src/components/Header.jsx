import { useContext, useState } from "react";
import CartModal from "./CartModal";
import ThemeButton from "./ThemeButton";
import CartXLogo from "../assets/logo.svg";
import cartXDarkLogo from "../assets/logo_dark.svg";
import { Flex, Input } from 'antd';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  return (
    <header className="flex flex-row justify-around z-50 fixed top-0 right-0 left-0 items-center p-2 dark:bg-palette-dark-400 bg-white/80 border-b border-black/25 shadow-lg">
      {/* LOGO */}
      <div>
        <a className="flex flex-row items-center text-palette-light-100 text-2xl cursor-pointer text-shadow-md dark:text-palette-dark-200" href="#">
          <img src={darkMode ? cartXDarkLogo : CartXLogo} width={"32px"} alt="CartX Logo" />
          <span className="hidden md:flex">Cart<span className="text-palette-light-100 dark:text-white font-bold">X</span></span>
        </a>
      </div>

      {/* BARRA DE BÚSQUEDA */}
      <div className="flex w-1/2">
        <div className="m-2 rounded-2xl w-full bg-white dark:bg-palette-dark-100 text-white placeholder:white">
          <Flex vertical gap={12}>
            <Input.Search
              placeholder="Search for a product..."
              variant="filled"
              rootClassName="search-dark"
              className="text-black dark:text-white dark:placeholder-white"
              allowClear
            />
          </Flex>
        </div>
      </div>

      {/* BUTTONS DESKTOP */}
      <div className="hidden md:flex">
        <nav>
          <ul className="flex flex-row justify-around items-center gap-2">
            <li><button className="cursor-pointer rounded p-2 text-white m-2 bg-palette-light-100 dark:bg-palette-dark-100 hover:scale-105 transition-transform duration-200">Nuevos</button></li>
            <li><button className="cursor-pointer rounded p-2 text-white m-2 bg-palette-light-200 dark:bg-palette-dark-200 hover:scale-105 transition-transform duration-200">Ofertas</button></li>
            <li><button className="cursor-pointer rounded p-2 text-white m-2 bg-palette-light-300 dark:bg-palette-dark-300 hover:scale-105 transition-transform duration-200">Categorías</button></li>
            <li><button onClick={() => setIsModalOpen(prev => !prev)} className="cursor-pointer rounded p-2 m-2 text-white bg-palette-light-400 dark:bg-palette-dark-500 hover:scale-105 transition-transform duration-200">Carrito</button></li>
            <li><ThemeButton/></li>
          </ul>
        </nav>
      </div>

      {/* BURGER BUTTON */}
      <div className="md:hidden flex">
        <button onClick={ () => setIsMenuOpen( !isMenuOpen ) } className="">
          {
            isMenuOpen
            ? <AiOutlineClose size={20} />
            : <AiOutlineMenu size={20} />
          }
        </button>
      </div>

      {/* BUTTONS MOBILE */}
      <div
        className={`
          text-center absolute top-16 w-full transition-all duration-300 bg-white md:hidden shadow-2xl z-50
          ${isMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <ul className="flex flex-col">
          <li className="bg-palette-light-100 text-white dark:bg-palette-dark-100"><button className="cursor-pointer p-1 m-2 py-1 px-40">Nuevos</button></li>
          <li className="bg-palette-light-200 text-white dark:bg-palette-dark-200"><button className="cursor-pointer p-1 m-2 py-1 px-40">Ofertas</button></li>
          <li className="bg-palette-light-300 text-white dark:bg-palette-dark-300"><button className="cursor-pointer p-1 m-2 py-1 px-40">Categorías</button></li>
          <li className="bg-palette-light-400 text-white dark:bg-palette-dark-400"><button onClick={ () => setIsModalOpen(prev => !prev) } className="cursor-pointer py-1 px-40 m-2">Carrito</button></li>
        </ul>
      </div>

      {
        isModalOpen && <CartModal onClose = {() => setIsModalOpen( false )} />
      }

      <div className="md:hidden fixed right-5 bottom-5">
        <ThemeButton size={30}/>
      </div>
    </header>
  )
}

export default Header;