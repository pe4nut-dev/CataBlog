
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  rating: {
    rate: number;
    count: number;
  };
}

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Leather Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "bags",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
    featured: true,
    rating: {
      rate: 4.8,
      count: 523
    }
  },
  {
    id: "2",
    title: "Slim Fit T-Shirts",
    price: 22.99,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: {
      rate: 4.3,
      count: 259
    }
  },
  {
    id: "3",
    title: "Cotton Casual Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    rating: {
      rate: 4.5,
      count: 146
    }
  },
  {
    id: "4",
    title: "Minimalist Watch",
    price: 89.99,
    description: "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1699&q=80",
    rating: {
      rate: 4.6,
      count: 213
    }
  },
  {
    id: "5",
    title: "Luxury Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    featured: true,
    rating: {
      rate: 4.9,
      count: 78
    }
  },
  {
    id: "6",
    title: "Designer Sunglasses",
    price: 126.99,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    rating: {
      rate: 4.2,
      count: 112
    }
  },
  {
    id: "7",
    title: "Premium Headphones",
    price: 359.95,
    description: "High quality digital headphones. The ergonomic design provides comfort for prolonged use. Features Bluetooth 5.0 and active noise cancelling for immersive audio experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    featured: true,
    rating: {
      rate: 4.7,
      count: 312
    }
  },
  {
    id: "8",
    title: "Handcrafted Mug",
    price: 12.49,
    description: "Handcrafted ceramic coffee mug. Unique design with a comfortable handle. Microwave and dishwasher safe.",
    category: "homeware",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    rating: {
      rate: 4.1,
      count: 102
    }
  }
];

export const categories = [...new Set(products.map(product => product.category))];
