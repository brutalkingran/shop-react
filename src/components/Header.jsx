import { useState } from "react";
import CartModal from "./CartModal";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col">
        <nav>
          <ul className="flex flex-row justify-around">
            <li><button className="cursor-pointer border rounded p-1 m-2">Menú Principal</button></li>
            <li><button className="cursor-pointer border rounded p-1 m-2">Nuevos</button></li>
            <li><button onClick={() => setIsModalOpen(prev => !prev)} className="cursor-pointer border rounded p-1 m-2">Carrito</button></li>
            <li><ThemeButton/></li>
          </ul>
        </nav>
      </div>

      {
        isModalOpen && <CartModal onClose = {() => setIsModalOpen(false)} />
      }
    </>
  )
}

export default Header;