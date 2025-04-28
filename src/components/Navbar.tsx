
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-catalog-dark">Cata<span className="text-catalog-primary">Blog</span></span>
          </a>
        </div>

        <nav className="hidden space-x-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-catalog-primary">Home</a>
          <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-catalog-primary">Categories</a>
          <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-catalog-primary">Featured</a>
          <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-catalog-primary">New Arrivals</a>
        </nav>

        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="relative w-full max-w-sm animate-fade-in">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 w-full" 
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-catalog-primary rounded-full">2</span>
          </Button>
          <Button className="hidden md:inline-flex bg-catalog-primary hover:bg-catalog-secondary text-white">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
