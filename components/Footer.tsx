import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-bold mb-4 gradient-text">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-veltrix-green transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-veltrix-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-veltrix-green transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-veltrix-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h5 className="text-xl font-bold mb-4 gradient-text">Connect with Us</h5>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@Veltrix.co.za</p>
              <p>Phone: +27 87 153 5573</p>
              <p>Phone: +27 83 238 9005</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="text-xl font-bold mb-4 gradient-text">Follow Us</h5>
            <div className="space-y-2">
              <a 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/in/veltrix-digital-08655b365/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.tiktok.com/@yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-veltrix-green transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Veltrix Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
