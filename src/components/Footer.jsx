import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Info Section */}
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-indigo-300"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="ml-3 text-2xl font-extrabold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Sentinel AI</span>
            </div>
            <p className="text-indigo-200 text-center md:text-left max-w-xs">
              Providing advanced deepfake detection tools and educational resources since 2025
            </p>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h6 className="font-semibold text-indigo-300 mb-3">Explore</h6>
              <ul className="space-y-2">
                <li><a href="/" className="text-indigo-100 hover:text-white transition">Home</a></li>
                <li><a href="/game" className="text-indigo-100 hover:text-white transition">TruthQuest</a></li>
                <li><a href="/scan" className="text-indigo-100 hover:text-white transition">TruthScan</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-indigo-300 mb-3">Learn</h6>
              <ul className="space-y-2">
                <li><a href="/truthAcademy" className="text-indigo-100 hover:text-white transition">TruthAcademy</a></li>
                <li><a href="/" className="text-indigo-100 hover:text-white transition">Resources</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h6 className="font-semibold text-indigo-300 mb-3">Connect</h6>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-200 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-indigo-200 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="#" className="text-indigo-200 hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-indigo-700 text-center">
          <p className="text-indigo-300 text-sm">
            © {new Date().getFullYear()} Sentinel AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;