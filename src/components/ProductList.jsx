import products from "../api/products.json";
import ProductCard from './ProductCard';

const ProductList = () => {
return (
<div className="container mx-auto px-4 py-8">
	<h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestros Productos</h2>
	
	<div className="flex flex-nowrap overflow-x-auto pb-4 space-x-4 md:flex-wrap md:overflow-x-visible md:space-x-0 md:gap-4">
	{products.map((product) => (
		<ProductCard key={ product.id } product={ product } />
	))}
	</div>
</div>
);
};

export default ProductList;