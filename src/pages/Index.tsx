
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="mt-4 text-lg text-gray-600">Discover our hand-picked selection of premium items</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <div key={product.id} className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md">
                  <div className="relative flex-shrink-0 h-64">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6">
                    <div>
                      <p className="text-sm font-medium text-catalog-primary">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900">{product.title}</h3>
                      <p className="mt-2 text-base text-gray-500 line-clamp-2">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <p className="text-lg font-medium text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-500">{product.rating.rate} ({product.rating.count})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <ProductGrid />
        
        {/* Newsletter Section */}
        <section className="py-16 bg-catalog-dark text-white">
          <div className="container px-4 mx-auto text-center sm:px-6">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="mt-4 text-lg text-gray-300">Subscribe to our newsletter for exclusive offers and product updates</p>
            <div className="max-w-md mx-auto mt-8">
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-catalog-primary"
                />
                <button className="px-6 py-3 font-medium text-white bg-catalog-primary rounded-md hover:bg-catalog-secondary">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-400">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
