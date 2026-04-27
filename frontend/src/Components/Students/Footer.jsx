import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16 lg:px-24">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Edemy
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Learn anything, anytime, anywhere. Build your skills with
            high-quality courses designed by industry experts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Courses
            </li>
            <li className="hover:text-white cursor-pointer transition">
              About
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Email: support@edemy.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Kanpur, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © 2026 Edemy. All rights reserved.
      </div>
      
    </footer>
  );
}

export default Footer;