
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-col w-full gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <div className="flex items-center gap-1 bg-gray-100 rounded-full py-1 px-3">
          <Filter className="h-4 w-4" />
          <span className="text-sm">Filter:</span>
        </div>
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(null)}
          className={selectedCategory === null ? "bg-catalog-primary hover:bg-catalog-secondary" : ""}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onSelectCategory(category)}
            className={`capitalize ${
              selectedCategory === category ? "bg-catalog-primary hover:bg-catalog-secondary" : ""
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
