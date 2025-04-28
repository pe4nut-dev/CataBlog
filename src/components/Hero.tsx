
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-catalog-light">
      <div className="container px-4 py-16 mx-auto sm:px-6 md:py-24 lg:py-32">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-gray-900">Discover Quality</span>
              <span className="block text-catalog-primary">Products</span>
            </h1>
            <p className="text-lg text-gray-600">
              Explore our curated collection of premium products designed for quality, comfort and style. New items added every week.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button className="px-8 py-6 text-lg bg-catalog-primary hover:bg-catalog-secondary">
                Shop Collection
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg text-catalog-primary border-catalog-primary hover:bg-catalog-light hover:text-catalog-secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-zoom-in">
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-catalog-primary/20 to-transparent rounded-lg transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Featured product"
              className="relative z-10 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
