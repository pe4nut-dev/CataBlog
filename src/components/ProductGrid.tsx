
import { useState } from 'react';
import { categories, products } from '../data/products';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto sm:px-6">
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
