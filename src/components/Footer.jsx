import React from 'react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6 font-sans border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </div>
              <span className="text-2xl font-serif text-white tracking-wide">Canvix</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              We're a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.
            </p>
          </div>

          {/* Pages Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-serif text-base mb-4">Pages</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><button onClick={() => setActivePage?.('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setActivePage?.('home2')} className="hover:text-white transition-colors">Home 2</button></li>
              <li><button onClick={() => setActivePage?.('about')} className="hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => setActivePage?.('contact')} className="hover:text-white transition-colors">Conatct Us</button></li>
              <li><button onClick={() => setActivePage?.('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => setActivePage?.('portfolio-single')} className="hover:text-white transition-colors">Portfolio Single</button></li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-white font-serif text-base mb-4">Utility Pages</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instruction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Error 404</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Password Protected</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-serif text-base mb-4">Subscribe</h4>
            <div className="flex items-center bg-white rounded-full p-1 pl-4 w-full max-w-sm shadow-sm">
              <input
                type="email"
                placeholder="Enter your email here"
                className="bg-transparent text-gray-900 text-xs focus:outline-none w-full placeholder-gray-500"
              />
              <button className="bg-gray-800 hover:bg-black text-white text-xs px-5 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-400 gap-6">
          <div>
            <p className="text-white font-serif font-medium text-sm">Copyright by</p>
            <p className="text-gray-400 text-xs mt-1">Designed by Iconstica.com</p>
          </div>

          <div>
            <p className="text-white font-serif font-medium text-sm">Contact Us</p>
            <p className="text-gray-400 text-xs mt-1">+0 12 457 4578</p>
          </div>

          <div>
            <p className="text-white font-serif font-medium text-sm">Address</p>
            <p className="text-gray-400 text-xs mt-1">119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

