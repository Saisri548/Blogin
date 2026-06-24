import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 px-10 py-10 hover:text-white cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">Blogin</h1>
          <p className="text-gray-400 mt-2">
            A modern platform to write, share and discover blogs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Explore</li>
            <li>Write Blog</li>
            <li>About</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-semibold mb-3">Categories</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Technology</li>
            <li>Programming</li>
            <li>Startups</li>
            <li>Design</li>
            <li>Lifestyle</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="font-semibold mb-3">Connect</h2>
          <ul className="space-y-2 text-gray-400">
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Email</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2026 Blogin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;