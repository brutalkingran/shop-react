import useCart from "../hooks/useCart.js";

const ProductCard = ({ product }) => {
	const { addItem, cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
	const item = cart.find(i => i.id === product.id);

	return (
		<div className="flex-shrink-0 w-64 m-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			<div className="h-48 bg-gray-100 flex items-center justify-center">
				<img 
					src={product.image} 
					alt={product.product_name}
					className="h-full w-full object-contain p-4"
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = "https://placehold.co/600x400";
					}}
				/>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.product_name}</h3>
				<div className="flex justify-between items-center">
					<span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
					<div>
						<button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors cursor-pointer">
							Comprar
						</button>
						
						{!item ? (
							<button onClick={() => addItem(product)} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors cursor-pointer">
								Añadir a Carrito
							</button>
						) : (
							<div className="flex gap-2 items-center">
								<button onClick={() => decreaseQuantity(product.id)}>-</button>
								<span>{item.quantity}</span>
								<button onClick={() => increaseQuantity(product.id)}>+</button>
								<button onClick={() => removeItem(product.id)} className="text-red-600">Eliminar</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

