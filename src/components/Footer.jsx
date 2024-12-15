import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-8 mt-6">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Company Info */}
      <div>
        <h4 className="font-bold text-white mb-4">Company Info</h4>
        <ul>
          <li>
            <a href="#" className="hover:text-pink-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              Social Responsibility
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              Affiliate
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              Fashion Blogger
            </a>
          </li>
        </ul>
      </div>

      {/* Help & Support */}
      <div>
        <h4 className="font-bold text-white mb-4">Help & Support</h4>
        <ul>
          <li>
            <a href="#" className="hover:text-pink-400">
              Shipping Info
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              Returns
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              How to Order
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400">
              Size Chart
            </a>
          </li>
        </ul>
      </div>

      {/* Socials and Newsletter */}
      <div>
        <h4 className="font-bold text-white mb-4">Socials</h4>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>

        <h4 className="font-bold text-white mb-2">Subscribe</h4>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 w-full rounded-l-lg focus:outline-none"
          />
          <button className="bg-pink-600 text-white px-4 rounded-r-lg">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="text-center text-sm mt-6">
      <p>© {new Date().getFullYear()} MoBooM. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
