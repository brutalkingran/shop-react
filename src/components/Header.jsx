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
    <header className="flex flex-row justify-around z-50 fixed top-0 right-0 left-0 items-center p-2 bg-palette-dark-400">
      {/* LOGO */}
      <div className="flex">
        <a className="cursor-pointer" href="#">
          <img src={darkMode ? cartXDarkLogo : CartXLogo} width={"32px"} alt="CartX Logo" />
        </a>
      </div>

      {/* BARRA DE BÚSQUEDA */}
      <div className="flex">
        <div className='m-2 rounded-2xl bg-white'>
          <Flex vertical gap={12} color='#ffffff'>
            <Input.Search placeholder="Search for a product..." variant="filled" className='text-white'/>
          </Flex>
        </div>
      </div>

      {/* BUTTONS DESKTOP */}
      <div className="hidden md:flex">
        <nav>
          <ul className="flex flex-row justify-around">
            <li><button className="cursor-pointer border rounded p-1 m-2">Nuevos</button></li>
            <li><button className="cursor-pointer border rounded p-1 m-2">Ofertas</button></li>
            <li><button onClick={() => setIsModalOpen(prev => !prev)} className="cursor-pointer border rounded p-1 m-2">Carrito</button></li>
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
          absolute top-16 w-full transition-all duration-300 bg-white md:hidden shadow-2xl z-50
          ${isMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <ul className="flex flex-col py-2">
          <li><button className="cursor-pointer p-1 m-2">Nuevos</button></li>
          <li><button className="cursor-pointer p-1 m-2">Ofertas</button></li>
          <li><button onClick={ () => setIsModalOpen(prev => !prev) } className="cursor-pointer p-1 m-2">Carrito</button></li>
        </ul>
      </div>

      {
        isModalOpen && <CartModal onClose = {() => setIsModalOpen( false )} />
      }

      <div className="md:hidden fixed top-210 right-0 left-90">
        <ThemeButton/>
      </div>
    </header>
  )
}

export default Header;