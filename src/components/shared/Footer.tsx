import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Container */}
          <div className="text-lg mx-auto gap-0 items-center lg:flex md:flex hidden ">
            <Image
              src="https://cdn.vectorstock.com/i/500p/92/54/shopping-cart-sale-logo-vector-14799254.jpg"
              alt="Shop Logo"
              width={96}
              height={96}
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-3xl italic font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              EcomHive
            </h2>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-500 mb-4">
                Contact Us
              </h3>
              <p>Email: contact@website.com</p>
              <p>Phone: +123-456-7890</p>
              <p>Address: 123 Main St, Orlando, FL, USA</p>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold text-orange-200 mb-4">
              Important Pages
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>

              <li>
                <a href="/blog" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-orange-200 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:bg-blue-800 bg-blue-600 rounded-full p-2"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:bg-pink-800 bg-pink-600 rounded-full p-2"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:bg-blue-800 bg-blue-600 rounded-full p-2"
              >
                <AiFillTwitterCircle size={24} />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:bg-red-800 bg-red-600 rounded-full p-2"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-2/3 p-2 rounded-md border border-gray-300 text-gray-700"
              />
              <button
                type="submit"
                className="bg-orange-900 hover:bg-orange-700 text-white py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>
              &copy; {new Date().getFullYear()} OurWebsite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
