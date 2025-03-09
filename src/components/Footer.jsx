import React from 'react';
import { motion } from 'framer-motion';
import './css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-95"></div>
      
      {/* Background circles for visual interest */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and Info Section */}
          <motion.div 
            className="md:col-span-4 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6 group">
              <svg
                width="45"
                height="45"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-indigo-300 group-hover:text-white transition-colors duration-300"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="ml-3 text-2xl font-extrabold bg-gradient-to-r from-indigo-300 to-purple-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">Sentinel AI</span>
            </div>
            <p className="text-indigo-200 text-center md:text-left max-w-xs leading-relaxed mb-8">
              Empowering digital citizens with deepfake detection tools and educational resources since 2025.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 w-full">
              <h4 className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 text-white placeholder-indigo-200 rounded-l-md px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-r-md transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Links Sections */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h6 className="font-semibold text-white text-lg mb-4 border-b border-indigo-700 pb-2">Explore</h6>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/game" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">TruthQuest</span>
                    </a>
                  </li>
                  <li>
                    <a href="/scan" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">TruthScan</span>
                    </a>
                  </li>
                  <li>
                    <a href="/map" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">Truth Map</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h6 className="font-semibold text-white text-lg mb-4 border-b border-indigo-700 pb-2">Learn</h6>
                <ul className="space-y-3">
                  <li>
                    <a href="/truthAcademy" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">TruthAcademy</span>
                    </a>
                  </li>
                  <li>
                    <a href="/resources" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">Resources</span>
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-indigo-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="absolute w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-6 transition-all duration-300">FAQ</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h6 className="font-semibold text-white text-lg mb-4 border-b border-indigo-700 pb-2">Connect</h6>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a href="#" className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 text-white hover:bg-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 text-white hover:bg-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 text-white hover:bg-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 text-white hover:bg-indigo-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-6">
                  <p className="text-indigo-200 mb-2">Contact Us</p>
                  <a href="mailto:info@sentinelai.com" className="text-white hover:text-indigo-300 transition-colors duration-300">info@sentinelai.com</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-300 text-sm mb-4 md:mb-0">
            © {currentYear} Sentinel AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/terms" className="text-indigo-300 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="/privacy" className="text-indigo-300 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="/cookies" className="text-indigo-300 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;