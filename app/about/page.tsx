import Image from 'next/image';
import { Award, Users, Heart, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Service', value: '15+', icon: Clock },
    { label: 'Happy Customers', value: '10,000+', icon: Users },
    { label: 'Shoe Brands', value: '50+', icon: Award },
    { label: 'Customer Satisfaction', value: '98%', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Sapaththu Kade
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6 sinhala-text">
            සපත්තු කඩේ ගැන
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted local shoe store, serving the community with quality footwear and exceptional service since 2010.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sapaththu Kade started as a small family business with a simple mission: to provide 
                high-quality, affordable footwear to our local community. What began as a modest shop 
                in Colombo has grown into one of Sri Lanka's most trusted shoe retailers.
              </p>
              <p>
                Over the years, we've built strong relationships with international brands and local 
                suppliers, ensuring that we can offer the latest styles at prices that work for every budget. 
                Our commitment to customer satisfaction has remained unchanged since day one.
              </p>
              <p className="sinhala-text">
                අපි ආරම්භ කළේ කුඩා පවුල් ව්‍යාපාරයක් ලෙසයි. අපගේ ප්‍රධාන අරමුණ වූයේ ගුණාත්මක, 
                මිල ගැලපෙන සපත්තු ප්‍රජාවට ලබා දීමයි. අද අප ශ්‍රී ලංකාවේ විශ්වාසනීය සපත්තු 
                කාමරයක් බවට පත්ව ඇත.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Sapaththu Kade Store"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <h4 className="text-xl font-semibold text-red-600 sinhala-text mb-6">
              අපගේ මෙහෙවර
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">English</h4>
              <p className="text-gray-700 leading-relaxed">
                To be Sri Lanka's leading footwear destination by offering exceptional quality, 
                unbeatable prices, and outstanding customer service. We believe everyone deserves 
                to walk in comfort and style, regardless of their budget.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We're committed to building lasting relationships with our customers through trust, 
                transparency, and a genuine passion for helping people find the perfect shoes for every occasion.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 sinhala-text">සිංහල</h4>
              <p className="text-gray-700 leading-relaxed sinhala-text">
                ශ්‍රී ලංකාවේ ප්‍රමුඛ සපත්තු ගමනාන්තය වීම අපගේ අරමුණයි. අපි ඉතා ගුණාත්මක, 
                මිල ගැලපෙන සහ විශිෂ්ට සේවාවක් ලබා දෙනවා. සෑම කෙනෙකුටම ඔවුන්ගේ අයවැයට 
                ගැලපෙන සැපපහසු සහ ලස්සන සපත්තු ලබා ගැනීමේ අයිතිය ඇති බව අපි විශ්වාස කරනවා.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 sinhala-text">
                විශ්වාසය, විනිවිදභාවය සහ සෑම අවස්ථාවකටම සුදුසු සපත්තු සොයා ගැනීමට 
                ඇති අපගේ උනන්දුව තුළින් පාරිභෝගිකයන් සමඟ දිගුකාලීන සබඳතා ගොඩනගා ගැනීමට අපි කැපවී සිටිමු.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Quality First</h4>
              <p className="text-sm text-gray-600">
                We never compromise on quality. Every shoe we sell meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Customer Focus</h4>
              <p className="text-sm text-gray-600">
                Your satisfaction is our priority. We're here to help you find the perfect fit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Community</h4>
              <p className="text-sm text-gray-600">
                We're proud to be part of the Sri Lankan community and give back whenever possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}