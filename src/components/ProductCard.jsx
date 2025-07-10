import useCart from "../hooks/useCart.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const ProductCard = ({ product }) => {
	const { addItem, cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
	const item = cart.find(i => i.id === product.id);

	return (
		<div className="group p-1 border-1 border-palette-light-300 m-1 mb-3 flex flex-row bg-white dark:bg-black dark:border-white rounded-lg shadow-md overflow-hidden hover:shadow-lg  cursor-pointer md:flex-col w-full md:w-75 justify-between items-center hover:scale-105 transition-transform duration-200">
			{/* PRODUCT IMAGE */}
			<div className="max-h-48 w-50 md:w-auto object-contain rounded ">
				<img 
					src={product.image} 
					alt={product.product_name}
					className="h-full w-full flex items-center justify-center flex-shrink-0 rounded"
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = "https://placehold.co/600x400?text=error";
					}}
				/>
			</div>
			
			{/* INFO */}
			<div className="p-2 w-full">
				{/* TITLE */}
				<h3 className="text-lg font-semibold mb-2 dark:text-white text-center bg-palette-light-400 rounded-3xl text-white dark:bg-palette-dark-100">{product.product_name}</h3>
				
				<div className="flex flex-col justify-between items-center m-1 dark:text-neutral-200">
					{/* DESCRIPCION */}
					<p className="line-clamp-4 md:text-center">{product.descripcion}</p>
					
					<div className="flex flex-row justify-between">
						{/* PRICE */}
						<span className="text-2xl font-bold  text-palette-light-200 dark:text-palette-dark-200 m-1">${product.price.toFixed(2)}</span>

						{/* ACTIONS */}
						<div className="line-clamp-2 flex flex-row m-1">
							{/* ADD TO CART */}
							{!item ? (
								<button onClick={() => addItem(product)} className="px-1 py-1 bg-palette-light-100 dark:bg-palette-dark-400 text-white rounded hover:bg-palette-light-200 transition-colors cursor-pointer dark:hover:bg-palette-dark-200">
									<span className="flex flex-row items-center">
										<AiOutlineShoppingCart size={25}/>
										<AiOutlinePlus/>
									</span>
								</button>
							) : (
								<div className="flex gap-2 items-center">
									{/* INCREASE/DECREASE/DELETE */}
									<button onClick={() => decreaseQuantity(product.id)} className="rounded p-1 cursor-pointer hover:text-white bg-palette-light-100 text-white hover:bg-palette-light-400 transition dark:bg-palette-dark-100 dark:hover:bg-palette-dark-200">
										-
									</button>

									<span>{item.quantity}</span>

									<button onClick={() => increaseQuantity(product.id)} className="rounded p-1 cursor-pointer hover:text-white bg-palette-light-100 text-white hover:bg-palette-light-200 transition dark:bg-palette-dark-100 dark:hover:bg-palette-dark-200">
										+
									</button>

									<button onClick={() => removeItem(product.id)} className="text-palette-light-400 rounded-full border-2 border-palette-light-400 p-1 hover:bg-palette-light-400 cursor-pointer hover:text-white transition">
										<AiOutlineDelete size={20}/>
									</button>
								</div>
							)}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default ProductCard;

