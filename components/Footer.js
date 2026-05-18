import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-white mb-4">El-Bendary</h3>
          <p className="text-sm">
            Your trusted pharmacy since 1980. Providing quality medicines and healthcare products.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/branches" className="hover:text-white">Branches</Link></li>
            <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><a href="tel:01200400094" className="hover:text-white">Contact: 01200400094</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Follow Us</h4>
          <div className="space-y-2">
            <a href="#" className="hover:text-white block">Facebook</a>
            <a href="#" className="hover:text-white block">Instagram</a>
            <a href="#" className="hover:text-white block">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        <p>© 2026 El-Bendary Pharmacy. All rights reserved.</p>
      </div>
    </footer>
  );
}
