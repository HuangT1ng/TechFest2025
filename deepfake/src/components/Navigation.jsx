import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import image2 from '../assets/worldmap.png'
import {useNavigate } from 'react-router-dom';
import Login from "./Login";

const Navigation = () => {

  return (
      
      <>
       
       
      <nav className="flex justify-between items-center p-4 bg-transparent">
      <div className="flex items-center">
        <svg className="h-8 w-8 text-yellow-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="ml-2 font-bold text-yellow-800">SENTINEL AI</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative group">
          <button className=" bg-transparent text-yellow-800 rounded-full hover:bg-yellow-400 px-2 py-1 flex items-center">
            Home
            <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div className="relative group">
          <button className="px-2 py-1 bg-transparent text-yellow-800 rounded-full hover:bg-yellow-400 flex items-center text-yellow-800">
            Game
            <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div className="relative group">
          <button className="px-2 py-1 bg-transparent text-yellow-800 rounded-full hover:bg-yellow-400 flex items-center text-yellow-800">
            Leaderboard
            <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="px-4 py-1 text-yellow-800 rounded-full hover:bg-yellow-400 transition-colors bg-yellow-100" >Login</button>
        <button className="px-4 py-1 bg-yellow-300 text-yellow-800 rounded-full hover:bg-yellow-400 transition-colors">Registration</button>
      </div>
    </nav>
    </>
  
  );
}

export default Navigation;
