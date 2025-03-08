import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import image2 from '../assets/worldmap.png'
import {useNavigate, Link } from 'react-router-dom';
import Login from "./Login";

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md">
      <nav className="flex justify-between items-center p-4 bg-transparent">
      <div className="flex items-center">
        <svg className="h-8 w-8 text-yellow-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="ml-2 font-bold text-yellow-800">SENTINEL AI</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <button 
            onClick={() => handleNavigation('/')}
            className="bg-transparent text-yellow-800 rounded-full hover:bg-yellow-400 px-4 py-1 flex items-center"
          >
            Home
          </button>
        </div>
        
        <div className="relative group">
          <button 
            onClick={() => handleNavigation('/game')}
            className="px-4 py-1 bg-transparent text-yellow-800 rounded-full hover:bg-yellow-400 flex items-center"
          >
            Games
          </button>
        </div>
        
        <div className="relative group">
          <button 
            onClick={() => handleNavigation('/news')}
            className="px-4 py-1 bg-transparent text-yellow-800 rounded-full hover:bg-yellow-400 flex items-center"
          >
            Mini Courses
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <button 
          onClick={() => handleNavigation('/login')}
          className="px-4 py-1 text-yellow-800 rounded-full hover:bg-yellow-400 transition-colors bg-yellow-100" 
        >
          Login
        </button>
        <button className="px-4 py-1 bg-yellow-300 text-yellow-800 rounded-full hover:bg-yellow-400 transition-colors">
          Registration
        </button>
      </div>
    </nav>
    </div>
  );
}

export default Navigation;
