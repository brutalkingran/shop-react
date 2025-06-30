import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addItem = item => dispatch({ type: 'ADD_ITEM', payload: item });
  const increaseQuantity = id => dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  const decreaseQuantity = id => dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  const removeItem = id => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return {
    cart,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    total,
  };
};

export default useCart;