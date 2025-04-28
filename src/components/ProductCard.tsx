
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card 
      className="overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className={`object-cover w-full h-full transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-catalog-primary text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-gray-900 line-clamp-1">{product.title}</h3>
          <span className="text-sm font-bold text-catalog-primary">{formatPrice(product.price)}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-1">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating.rate) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"
                }`} 
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">({product.rating.count})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-catalog-primary hover:bg-catalog-secondary"
        >
          <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
