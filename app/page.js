import Image from "next/image";
import Link from "next/link";
import Ads from "../components/Ads";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="text-center py-12 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          صيدليات البنداري – BENDAR since 1980
        </h1>
        <p className="mt-4 text-lg text-red-100">
          Your trusted pharmacy for health, wellness, and care.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50"
        >
          Browse Products
        </Link>
      </section>

      {/* Banner Ad */}
      <Ads type="banner" />

      {/* Categories Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="section-title">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "Medicines", icon: "💊" },
            { name: "Skincare", icon: "💆" },
            { name: "Haircare", icon: "💇" },
            { name: "Vitamins", icon: "🌿" },
            { name: "Mother & Child", icon: "👶" },
          ].map((cat) => (
            <Link key={cat.name} href={`/shop?category=${cat.name}`}>
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center cursor-pointer transition">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="font-semibold text-gray-800">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-red-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fast Delivery", desc: "Quick and reliable delivery to your doorstep" },
              { title: "Quality Assured", desc: "100% authentic pharmaceutical products" },
              { title: "24/7 Support", desc: "Customer support available round the clock" },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="font-bold text-lg text-red-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        © 2026 El-Bendary Pharmacy. Hotline: 01200400094
      </footer>
    </main>
  );
}
