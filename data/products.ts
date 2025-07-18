export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'men' | 'women' | 'kids';
  brand: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Black Sneakers',
    slug: 'classic-black-sneakers',
    description: 'Timeless black sneakers perfect for everyday wear. Made with premium materials for lasting comfort.',
    price: 4500,
    originalPrice: 6000,
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    brand: 'Nike',
    colors: ['Black', 'White'],
    sizes: ['7', '8', '9', '10', '11'],
    isNew: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Red Running Shoes',
    slug: 'red-running-shoes',
    description: 'High-performance running shoes with advanced cushioning technology for optimal comfort.',
    price: 7200,
    originalPrice: 9000,
    images: [
      'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    brand: 'Adidas',
    colors: ['Red', 'Black'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    isBestSeller: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'White Canvas Shoes',
    slug: 'white-canvas-shoes',
    description: 'Casual white canvas shoes that go with everything. Perfect for a relaxed, stylish look.',
    price: 3200,
    images: [
      'https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    brand: 'Converse',
    colors: ['White', 'Cream'],
    sizes: ['5', '6', '7', '8', '9'],
    rating: 4.6,
    reviews: 156
  },
  {
    id: '4',
    name: 'Elegant High Heels',
    slug: 'elegant-high-heels',
    description: 'Sophisticated high heels perfect for formal occasions and special events.',
    price: 5800,
    images: [
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    brand: 'Jimmy Choo',
    colors: ['Black', 'Red', 'Nude'],
    sizes: ['5', '6', '7', '8', '9'],
    rating: 4.7,
    reviews: 67
  },
  {
    id: '5',
    name: 'Kids Rainbow Sneakers',
    slug: 'kids-rainbow-sneakers',
    description: 'Fun and colorful sneakers designed specifically for active kids.',
    price: 2800,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'kids',
    brand: 'Sketchers',
    colors: ['Rainbow', 'Blue', 'Pink'],
    sizes: ['1', '2', '3', '4', '5'],
    isNew: true,
    rating: 4.9,
    reviews: 43
  },
  {
    id: '6',
    name: 'Brown Leather Boots',
    slug: 'brown-leather-boots',
    description: 'Premium leather boots that combine style and durability for the modern man.',
    price: 8500,
    originalPrice: 11000,
    images: [
      'https://images.pexels.com/photos/1598509/pexels-photo-1598509.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    brand: 'Timberland',
    colors: ['Brown', 'Black'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    isBestSeller: true,
    rating: 4.8,
    reviews: 92
  },
  {
    id: '7',
    name: 'Pink Ballet Flats',
    slug: 'pink-ballet-flats',
    description: 'Comfortable ballet flats in a lovely pink shade, perfect for everyday elegance.',
    price: 3800,
    images: [
      'https://images.pexels.com/photos/1598510/pexels-photo-1598510.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    brand: 'Tory Burch',
    colors: ['Pink', 'Black', 'Nude'],
    sizes: ['5', '6', '7', '8', '9'],
    rating: 4.5,
    reviews: 78
  },
  {
    id: '8',
    name: 'Kids Sports Shoes',
    slug: 'kids-sports-shoes',
    description: 'Durable sports shoes designed for active children with excellent grip and comfort.',
    price: 3500,
    images: [
      'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'kids',
    brand: 'Puma',
    colors: ['Blue', 'Red', 'Green'],
    sizes: ['1', '2', '3', '4', '5', '6'],
    rating: 4.7,
    reviews: 65
  },
  {
    id: '9',
    name: 'Designer Sandals',
    slug: 'designer-sandals',
    description: 'Trendy designer sandals perfect for summer outings and beach walks.',
    price: 4200,
    images: [
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    brand: 'Steve Madden',
    colors: ['Gold', 'Silver', 'Brown'],
    sizes: ['5', '6', '7', '8', '9'],
    rating: 4.4,
    reviews: 89
  },
  {
    id: '10',
    name: 'Professional Dress Shoes',
    slug: 'professional-dress-shoes',
    description: 'Classic dress shoes for the professional gentleman. Crafted with attention to detail.',
    price: 9500,
    images: [
      'https://images.pexels.com/photos/1598512/pexels-photo-1598512.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    brand: 'Cole Haan',
    colors: ['Black', 'Brown'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    rating: 4.9,
    reviews: 112
  },
  {
    id: '11',
    name: 'Casual Slip-ons',
    slug: 'casual-slip-ons',
    description: 'Easy-to-wear slip-on shoes that are perfect for casual outings and comfort.',
    price: 3600,
    images: [
      'https://images.pexels.com/photos/1598513/pexels-photo-1598513.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    brand: 'Vans',
    colors: ['Navy', 'Gray', 'Black'],
    sizes: ['7', '8', '9', '10', '11'],
    rating: 4.6,
    reviews: 95
  },
  {
    id: '12',
    name: 'Sparkly Kids Shoes',
    slug: 'sparkly-kids-shoes',
    description: 'Fun sparkly shoes that kids will love. Perfect for parties and special occasions.',
    price: 2500,
    images: [
      'https://images.pexels.com/photos/1598514/pexels-photo-1598514.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'kids',
    brand: 'Disney',
    colors: ['Silver', 'Gold', 'Pink'],
    sizes: ['1', '2', '3', '4', '5'],
    rating: 4.8,
    reviews: 34
  },
  {
    id: '13',
    name: 'Premium Leather Loafers',
    slug: 'premium-leather-loafers',
    description: 'Handcrafted leather loafers perfect for business and casual wear.',
    price: 6800,
    originalPrice: 8500,
    images: [
      'https://images.pexels.com/photos/1598515/pexels-photo-1598515.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    brand: 'Clarks',
    colors: ['Brown', 'Black'],
    sizes: ['7', '8', '9', '10', '11'],
    isNew: true,
    isBestSeller: false,
    rating: 4.7,
    reviews: 23
  }
];