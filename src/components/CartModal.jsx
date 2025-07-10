import { AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import useCart from "../hooks/useCart"; // ajusta la ruta si es diferente

const CartModal = ({ onClose }) => {
  const {
    cart,
    removeItem,
    clearCart,
    total,
  } = useCart();

  return (
    <div className="pt-15 fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      {/* Contenedor del modal */}
      <div className="bg-white dark:bg-black dark:border-white dark:border rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-4 shadow-xl">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold text-palette-300">Carrito de Compras</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-black hover:bg-palette-300 transition cursor-pointer dark:text-white"
          >
            <AiOutlineClose size={16} />
          </button>
        </div>

        {/* Verifica que el carrito tenga al menos un producto */}
        {cart.length > 0 ? (
          <>
            <ul className="space-y-2 mt-4">
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between gap-2 border-b pb-2"
                >
                  {/* Miniatura */}
                  <img
                    src={product.image}
                    alt={product.product_name}
                    className="w-12 h-16 object-cover rounded"
                  />

                  {/* Título */}
                  <p className="text-gray-800 flex-1 text-center truncate px-2 dark:text-white">
                    {product.product_name} ( x{product.quantity} )
                  </p>

                  {/* Botón de eliminar */}
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-palette-light-400 hover:text-red-700 cursor-pointer"
                    title="Eliminar"
                  >
                    <AiOutlineDelete size={22} />
                  </button>
                </li>
              ))}
            </ul>

            {/* Total y botón de borrar todos */}
            <div className="mt-4">
              <p className="text-right font-semibold text-lg text-palette-300">
                Total: <span className="text-palette-light-200 dark:text-palette-dark-200">${total.toFixed(2)}</span>
              </p>

              <button
                onClick={clearCart}
                className="dark:bg-palette-dark-100 bg-palette-light-400 cursor-pointer w-full mt-3 p-2 rounded text-white hover:bg-red-900 dark:hover:bg-palette-dark-200 transition"
              >
                BORRAR TODOS
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 mt-4">No hay productos en tu carrito.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
