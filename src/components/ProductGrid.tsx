
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from 'react';
// import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';


const ProductGrid = () => {
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState([]);
  
  // const filteredProducts = selectedCategory
  //   ? products.filter(product => product.category === selectedCategory)
  //   : products;


  async function getProducts() {
    const {data, error} = await supabase.from('catalog_items').select("*");
    if (error) {
      console.log("Error fetching Products: ", error)
    } else  {
      setProducts(data)
    }
    return products
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto sm:px-6">
        {/* <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
         */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
