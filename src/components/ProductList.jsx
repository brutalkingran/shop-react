import products from "../api/products.json";
import ProductCard from './ProductCard';

const ProductList = () => {
return (
<div className="container mx-auto px-1 py-8">
	<h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-5">Nuestros Productos</h2>
	
	<div>
		{products.map((product) => (
			<ProductCard key={ product.id } product={ product } />
		))}
	</div>
</div>
);
};

export default ProductList;