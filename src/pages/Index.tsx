
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  // This is temporary mock data - we'll replace it with real Pinterest data later
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CataBlog</h1>
              <p className="text-lg text-gray-600">Discover our curated selection of amazing products</p>
            </div>
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
