import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "TruthScan", path: "/scan" },
    { name: "TruthQuest", path: "/game" },
    { name: "TruthAcademy", path: "/truthAcademy" }
  ];

  return (
    <div className="bg-white shadow-sm">
      <nav className="flex justify-between items-center p-4 bg-white rounded-full shadow-md mx-4 my-3 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <svg className="h-10 w-10 text-indigo-600 transform transition-all hover:scale-110" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-pulse" />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent tracking-wide">Sentinel AI</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 p-2 rounded-lg focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-indigo-700 mb-1.5 transition-all" 
            style={{
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}
          ></div>
          <div className="w-6 h-0.5 bg-indigo-700 mb-1.5 transition-all" 
            style={{
              opacity: isMenuOpen ? 0 : 1
            }}
          ></div>
          <div className="w-6 h-0.5 bg-indigo-700 transition-all" 
            style={{
              transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }}
          ></div>
        </button>

        {/* Desktop Navigation Links - Now with white background */}
        <div className="hidden md:flex items-center space-x-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`relative px-5 py-2 rounded-lg font-medium transition-all 
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-white text-indigo-700 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 left-4 bg-white rounded-2xl shadow-xl p-4 z-50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-left px-4 py-3 rounded-lg font-medium ${
                    location.pathname === item.path
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-indigo-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-gray-200 my-2"></div>
              <button 
                onClick={() => handleNavigation('/login')}
                className="flex items-center px-4 py-3 bg-white text-indigo-700 hover:bg-gray-50 rounded-lg border border-gray-200"
              >
                <span className="mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                </span>
                Login
              </button>
              <button 
                onClick={() => handleNavigation('/register')}
                className="flex items-center px-4 py-3 bg-indigo-600 text-white rounded-lg"
              >
                <span className="mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  </svg>
                </span>
                Register
              </button>
            </div>
          </div>
        )}

        {/* Desktop Login & Register Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button 
            onClick={() => handleNavigation('/login')}
            className="px-6 py-2.5 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all"
          >
            Login
          </button>
          <button 
            onClick={() => handleNavigation('/register')}
            className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all"
          >
            Registration
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;