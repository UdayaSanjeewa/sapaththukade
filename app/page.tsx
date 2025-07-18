'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight, Truck, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.isNew || p.isBestSeller).slice(0, 6);

  const testimonials = [
    {
      name: 'Saman Perera',
      nameSinhala: 'සමන් පෙරේරා',
      comment: 'Excellent quality shoes and fast delivery! Very satisfied with my purchase.',
      commentSinhala: 'අපේ අනාගතය සදහා හොඳම සපත්තු. ගුණාත්මක භාවය ඉහළයි!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Nimal Silva',
      nameSinhala: 'නිමල් සිල්වා',
      comment: 'Great variety and affordable prices. The free delivery is a bonus!',
      commentSinhala: 'විවිධත්වය හා මිල ගණන් හොඳයි. නොමිලේ දරුවන් බට්ටමක්!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Kamani Fernando',
      nameSinhala: 'කමනී ප්‍රනාන්දු',
      comment: 'Perfect fit and beautiful designs. Highly recommend this store!',
      commentSinhala: 'පරිමිත ගැලපීම සහ ලස්සන මෝස්තර. මම නිර්දේශ කරනවා!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  ආයුබෝවන්!
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Sapaththu Kade Shop
                </h2>
                <p className="text-xl mt-4 text-gray-200">
                  Stylish. Affordable. Local.
                </p>
                <p className="text-lg mt-2 text-gray-300 sinhala-text">
                  නවීන, මිල ගැලපෙන, දේශීය සපත්තු
                </p>
              </div>

              {/* Promotional Banner */}
              <div className="bg-red-600 text-white px-6 py-4 rounded-lg inline-block">
                <p className="text-lg font-semibold">
                  🔥 Up to 50% Off Selected Styles!
                </p>
                <p className="text-sm sinhala-text">
                  තෝරාගත් මෝස්තර සදහා 50% ක් දක්වා වට්ටම්!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  View Collection
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Featured Shoes"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-sm text-gray-600">On all orders across Sri Lanka</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">Premium materials and craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Fast Service</h3>
              <p className="text-sm text-gray-600">Quick processing and delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Best Prices</h3>
              <p className="text-sm text-gray-600">Competitive and affordable rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and newest arrivals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 sinhala-text">
              අපේ පාරිභෝගිකයන්ගේ අත්දැකීම්
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 sinhala-text">{testimonial.nameSinhala}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-2">{testimonial.comment}</p>
                <p className="text-sm text-gray-600 sinhala-text">{testimonial.commentSinhala}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}