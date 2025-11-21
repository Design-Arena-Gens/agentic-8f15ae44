import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Facial Cleanser",
    description: "Gentle yet effective cleanser that purifies and refreshes your skin, removing impurities while maintaining natural moisture balance.",
    benefits: ["Deep Cleansing", "Hydrating", "pH Balanced"],
    price: "$45",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Extreme Lightening Face Cream",
    description: "Advanced formula that brightens and evens skin tone, revealing a luminous complexion with consistent use.",
    benefits: ["Brightening", "Even Tone", "Anti-Aging"],
    price: "$78",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Caramel Glowing Shower Gel",
    description: "Luxurious shower gel that cleanses and nourishes, leaving your skin with a radiant, healthy glow and subtle caramel scent.",
    benefits: ["Nourishing", "Radiance Boost", "Aromatic"],
    price: "$38",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Glowing Oil",
    description: "Concentrated botanical oil blend that deeply moisturizes and illuminates, perfect for face and body radiance.",
    benefits: ["Deep Hydration", "Luminous Glow", "Natural Oils"],
    price: "$62",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop"
  }
];

const features = [
  {
    title: "Premium Ingredients",
    description: "Carefully selected natural and scientific ingredients for optimal results",
    icon: "✨"
  },
  {
    title: "Dermatologist Tested",
    description: "All products are rigorously tested for safety and effectiveness",
    icon: "🔬"
  },
  {
    title: "Cruelty Free",
    description: "We never test on animals and use ethical sourcing practices",
    icon: "🌿"
  },
  {
    title: "Visible Results",
    description: "Experience noticeable improvements in your skin's radiance",
    icon: "💎"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💫</span>
            <span className="text-2xl font-bold text-gradient">Switch it Up Gallery</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-700 hover:text-primary transition">Products</a>
            <a href="#features" className="text-gray-700 hover:text-primary transition">Features</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition">About</a>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition">
            Shop Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Switch on the Beauty in You
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">
            Unveil Your Radiance
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Luxury Skincare, Made Simple
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary">
              Explore Collection
            </a>
            <button className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Luxury Collection</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated range of premium skincare products, each designed to bring out your natural radiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold">KEY BENEFITS:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-accent text-gray-700 px-3 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Switch it Up Gallery</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing the highest quality skincare with integrity and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Story</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              At <span className="font-bold text-primary">Switch it Up Gallery</span>, we believe that luxury skincare should be accessible and simple. Our mission is to help you unlock your natural radiance through carefully formulated products that deliver real results.
            </p>
            <p className="text-lg mb-6">
              Each product in our collection is crafted with the finest ingredients, combining nature's wisdom with modern science. From our gentle Facial Cleanser to our nourishing Glowing Oil, every item is designed to transform your skincare routine into a luxurious self-care ritual.
            </p>
            <p className="text-lg font-semibold text-primary">
              "Switch on the Beauty in You" isn't just our tagline—it's our promise to you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 hero-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Unveil Your Radiance?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their skin with Switch it Up Gallery
          </p>
          <button className="btn-primary text-lg">
            Shop the Collection
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">💫</span>
                <span className="text-xl font-bold">Switch it Up Gallery</span>
              </div>
              <p className="text-gray-400">
                Luxury Skincare, Made Simple
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#products" className="hover:text-primary transition">Products</a></li>
                <li><a href="#features" className="hover:text-primary transition">Features</a></li>
                <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Stay Connected</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers and skincare tips</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full text-gray-900"
                />
                <button className="bg-primary px-6 py-2 rounded-full hover:bg-secondary transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Switch it Up Gallery. All rights reserved. Luxury Skincare, Made Simple.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
