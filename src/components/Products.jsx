import products from "../data/products.json";
import ProductCard from "./ProductCard";

const Products = ({ addToCart, cart }) => {
  return (
    <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
            cart={cart || []}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;