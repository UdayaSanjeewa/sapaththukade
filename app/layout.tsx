import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Noto_Sans_Sinhala } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sinhala'
});

export const metadata: Metadata = {
  title: 'Sapaththu Kade Shop - Stylish Shoes for Everyone',
  description: 'Discover the latest collection of stylish and affordable shoes at Sapaththu Kade Shop. Free delivery available on all orders.',
  keywords: 'shoes, footwear, sneakers, boots, sandals, Sri Lanka, free delivery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoSansSinhala.variable}`}>
      <body className={`${poppins.className} antialiased`}>
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}