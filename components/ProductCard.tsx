'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        size: product.sizes[0],
        color: product.colors[0],
      },
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group bg-white rounded-lg shadow-md overflow-hidden card-hover cursor-pointer">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-green-600 hover:bg-green-700">NEW</Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-orange-600 hover:bg-orange-700">BEST SELLER</Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-red-600 hover:bg-red-700">-{discountPercentage}%</Badge>
            )}
          </div>

          {/* Free Delivery Badge */}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Truck className="h-3 w-3 mr-1" />
              Free Delivery
            </Badge>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              onClick={handleQuickAdd}
              className="w-full bg-black hover:bg-gray-800 text-white"
              size="sm"
            >
              Quick Add to Cart
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">{product.brand}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              LKR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                LKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="mt-2 flex space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <div className="text-xs text-gray-500">+{product.colors.length - 3}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}