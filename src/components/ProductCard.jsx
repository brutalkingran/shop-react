import useCart from "../hooks/useCart.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineDollar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const ProductCard = ({ product }) => {
	const { addItem, cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
	const item = cart.find(i => i.id === product.id);

	return (
		<div className="p-1 border-2 m-1 mb-3 flex flex-row bg-white dark:bg-black dark:border-palette-dark-400 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			{/* PRODUCT IMAGE */}
			<div className="h-48 flex items-center justify-center">
				<img 
					src={product.image} 
					alt={product.product_name}
					className="h-48 w-35 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded"
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = "https://placehold.co/600x400";
					}}
				/>
			</div>
			
			{/* DESCRIPTION */}
			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-white">{product.product_name}</h3>

				<div className="flex flex-col justify-between items-center m-1">
					<p className="line-clamp-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste assumenda unde velit doloremque ipsa cumque. Architecto qui ea itaque. Iusto nobis nulla animi, eos harum qui est quis suscipit.
					Unde aliquid, nemo nam, ad modi libero veniam magni sequi eius est laudantium provident natus nesciunt. Dolores excepturi totam facilis, possimus dolor tempore ipsum quasi qui omnis! Commodi, ipsum tenetur.
					Qui nulla odit doloribus, reiciendis aut harum et dolore, saepe ut dolorem accusantium laboriosam autem voluptatibus voluptatum ex voluptate dolores illum laudantium voluptates, incidunt minus? Nam possimus illo cumque mollitia?
					Unde voluptatem magnam aut harum magni id fugit quis dignissimos mollitia commodi in, nemo vero non voluptatibus laborum illo dolore reiciendis suscipit ab cum atque dolor excepturi enim debitis! Debitis.
					Quod tenetur quam unde rem expedita natus, accusamus laborum voluptatibus nesciunt quas eaque earum error laudantium et beatae minima reprehenderit porro repellendus labore accusantium odio atque. Impedit quas fugit magnam!</p>
					
					<div className="flex flex-row justify-between">
						<span className="text-2xl font-bold  text-palette-light-200 dark:text-palette-dark-200 m-1">${product.price.toFixed(2)}</span>

						<div className="line-clamp-2 flex flex-row m-1">
							{!item ? (
								<button onClick={() => addItem(product)} className="px-1 py-1 bg-palette-light-100 dark:bg-palette-dark-400 text-white rounded hover:bg-indigo-700 transition-colors cursor-pointer">
									<span className="flex flex-row items-center">
										<AiOutlineShoppingCart size={25}/>
										<AiOutlinePlus/>
									</span>
								</button>
							) : (
								<div className="flex gap-2 items-center">
									<button onClick={() => decreaseQuantity(product.id)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => increaseQuantity(product.id)}>+</button>
									<button onClick={() => removeItem(product.id)} className="text-palette-dark-200 rounded-full border-2 border-palette-dark-200 p-1"><AiOutlineDelete size={20}/></button>
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

