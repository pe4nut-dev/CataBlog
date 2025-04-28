
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PinterestGrid from "@/components/PinterestGrid";

const Index = () => {
  // This is temporary mock data - we'll replace it with real Pinterest data later
  const mockItems = [
    {
      id: "1",
      image_url: "https://picsum.photos/400/300",
      amazon_url: "#",
      title: "Sample Product 1"
    },
    {
      id: "2",
      image_url: "https://picsum.photos/400/301",
      amazon_url: "#",
      title: "Sample Product 2"
    },
  ];
  
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
            <PinterestGrid items={mockItems} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
