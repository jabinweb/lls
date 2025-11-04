import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/schedule", label: "Schedule" },
    { href: "/fees", label: "Fees" },
  ];

  const resources = [
    { href: "/accommodation", label: "Accommodation" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Landour Language School
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Learn languages in the beautiful Himalayan foothills
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social Media Icons (Placeholders) */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-lg">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-amber-400">📞</span>
                <a href="tel:+911352973163" className="hover:text-amber-400 transition-colors">
                  +91 135 2973163
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400">📱</span>
                <a href="tel:+911352973164" className="hover:text-amber-400 transition-colors">
                  +91 135 2973164
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400">📧</span>
                <a
                  href="mailto:info@landourlanguageschool.com"
                  className="text-sm hover:text-amber-400 transition-colors break-words"
                >
                  info@landourlanguageschool.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-amber-400 mt-1">📍</span>
                <span>41/2 Landour Cantonment, Mussoorie, Uttarakhand, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Landour Language School. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
