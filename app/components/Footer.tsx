import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            
           <div className="flex-shrink-0 flex items-center">
  <Link href="/favicon.ico" className="flex items-center">
    <img
      className="h-10 w-auto" // Adjust height (h-8, h-10, h-12) as needed
      src="/favicon.ico" // Path to your logo in /public
      alt="Nova Paint Logo"
    />
  </Link>
</div>
            <p className="text-sm">
            A leading South African brand, delivers high-performance, durable coatings for both interior and exterior applications on homes and hard surfaces. 
             </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/interior" className="hover:text-white">Interior Paints</Link></li>
              <li><Link href="/exterior" className="hover:text-white">Exterior Paints</Link></li>
              <li><Link href="/woodcare" className="hover:text-white">Woodcare</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link href="/store-locator" className="hover:text-white">Store Locator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie Settings</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Nova Paint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}