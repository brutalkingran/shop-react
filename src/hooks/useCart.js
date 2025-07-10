import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  // AÑADIR
  const addItem = (item) => { // Añade primer producto
    const exists = cart.find(prod => prod.id === item.id); // búsqueda

    if (exists) {
      setCart(cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + 1 } // crea el atributo quantity
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // INCREMENTAR
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // DECREMENTAR
  const decreaseQuantity = ( id ) => {
    setCart(cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  // REMOVE PRODUCT
  const removeItem = ( id ) => {
    setCart( cart.filter(item => item.id !== id )); // mantiene todos los items excepto los del id a eliminar
  };

  // CLEAR
  const clearCart = () => {
    setCart([]);
  };

  // GET TOTAL
  const total = cart.reduce( (acc, prod) => (acc + prod.price * prod.quantity), 0); // reduce calcula elementos de array ( array.reduce(callbackFn, initialValue), initialValue es 0 )

  return {
    cart,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    total
  };
};

export default useCart;
