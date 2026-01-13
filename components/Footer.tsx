import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-glass border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-veltrix-red via-veltrix-yellow to-veltrix-green bg-clip-text text-transparent mb-4">
              Veltrix Digital
            </h3>
            <p className="text-gray-400 text-sm">
              Powering Digital Growth through innovation and automation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-veltrix-green">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition">Website Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition">SEO</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Google Ads</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-veltrix-green">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-veltrix-green">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Veltrix Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
