
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import Product from "../data/product";

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
          src={product.image_url}
          alt={product.title}
          className={`object-contain w-full h-full transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-gray-900 line-clamp-1">{product.title}</h3>
        </div>
      </CardContent>
        <CardFooter className="p-4 pt-0">
          <a href={product.amazon_url}>
            <Button
              className="w-half  bg-catalog-primary hover:bg-catalog-secondary"
            >
              Shop
            </Button>
          </a>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
