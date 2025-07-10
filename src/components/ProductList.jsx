import products from "../api/products.json";
import ProductCard from './ProductCard';

const ProductList = () => {
	return (
	<div className="container mx-auto px-1 w-full">
		<div className="flex flex-row flex-wrap justify-center">
			{products.map((product) => (
				<ProductCard key={ product.id } product={ product } />
			))}
			<div className="p-1 border-1 border-palette-light-300 m-1 mb-3 flex flex-row bg-white dark:bg-black dark:border-white rounded-lg shadow-md overflow-hidden hover:shadow-lg  cursor-pointer md:flex-col w-full md:w-75 justify-center items-center hover:scale-105 transition-transform duration-200">
				<p className="text-5xl">+</p>
				<p>Más</p>
			</div>
		</div>
	</div>
	);
};

export default ProductList;