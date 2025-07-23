import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-bold">Sapaththu Kade</div>
              <div className="text-sm text-red-400 sinhala-text">සපත්තු කඩේ</div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted local shoe store offering stylish, affordable footwear for the entire family.
            </p>
            <p className="text-gray-400 text-sm sinhala-text">
              පවුලේ සියලු දෙනාට ගැලපෙන නවීන, මිල ගැලපෙන සපත්තු
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/shop?category=men" className="text-gray-400 hover:text-white transition-colors">Men's Shoes</Link></li>
              <li><Link href="/shop?category=women" className="text-gray-400 hover:text-white transition-colors">Women's Shoes</Link></li>
              <li><Link href="/shop?category=kids" className="text-gray-400 hover:text-white transition-colors">Kids' Shoes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+94 76 461 1915</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@sapaththukade.lk</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.414-5.997 1.414-5.997s-.362-.724-.362-1.793c0-1.679.974-2.931 2.188-2.931 1.032 0 1.531.774 1.531 1.699 0 1.035-.66 2.578-1.001 4.012-.285 1.205.604 2.188 1.793 2.188 2.152 0 3.811-2.267 3.811-5.536 0-2.893-2.077-4.917-5.042-4.917-3.437 0-5.462 2.58-5.462 5.248 0 1.038.4 2.151.899 2.756.099.12.113.225.083.347-.09.375-.293 1.199-.332 1.363-.05.21-.166.256-.382.154-1.42-.663-2.31-2.744-2.31-4.416 0-3.61 2.622-6.928 7.558-6.928 3.965 0 7.046 2.825 7.046 6.601 0 3.938-2.48 7.106-5.929 7.106-1.158 0-2.249-.603-2.619-1.321 0 0-.574 2.186-.714 2.719-.259.995-.959 2.24-1.429 3.002C9.39 23.53 10.665 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sapaththu Kade Shop. All rights reserved. | Free delivery available on all orders
          </p>
        </div>
      </div>
    </footer>
  );
}