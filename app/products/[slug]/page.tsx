import { products } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <a href="/shop" className="text-blue-600 hover:underline">Back to Shop</a>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}