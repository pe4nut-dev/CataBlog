
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface PinterestItem {
  id: string;
  image_url: string;
  amazon_url: string;
  title: string;
}

interface PinterestGridProps {
  items: PinterestItem[];
  isLoading?: boolean;
}

const PinterestGrid = ({ items, isLoading }: PinterestGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-[200px] w-full" />
            <CardContent className="p-4">
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <a 
          key={item.id} 
          href={item.amazon_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105"
        >
          <Card className="overflow-hidden">
            <img
              src={item.image_url}
              alt={item.title}
              className="h-[200px] w-full object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 line-clamp-2">{item.title}</h3>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default PinterestGrid;
