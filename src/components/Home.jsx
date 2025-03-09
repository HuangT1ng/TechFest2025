import React, { useRef, useState, useEffect } from 'react';
import { Carousel, Card, Badge, Image, Button, Container, Row, Col } from 'react-bootstrap';
import News from './News';
import Map from './Map';
import { motion } from "framer-motion";
import map from "../assets/Truthmap.jpg";
import logo from "../assets/SentinelAI.png";
import './css/card.css';

const Welcome = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const [showGrid, setShowGrid] = useState(false);
    const gridRef = useRef(null);
    
    return (
        <>
            <div className="bg-white min-h-screen">
                {/* Hero Section with 3D and Parallax effects */}
                <section className="relative min-h-screen flex items-center perspective-1000">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 overflow-hidden">
                        {/* Animated background elements */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-indigo-200 opacity-20"
                                style={{
                                    width: Math.random() * 100 + 50,
                                    height: Math.random() * 100 + 50,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, Math.random() * 40 - 20],
                                    x: [0, Math.random() * 40 - 20],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: Math.random() * 10 + 10,
                                }}
                            />
                        ))}
                    </div>

                    <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Left Side - Text with enhanced animations */}
                            <motion.div 
                                className="md:w-1/2 text-center md:text-left"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h1 className="text-5xl xs:text-6xl md:text-8xl font-extrabold leading-tight">
                                    Real or <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent font-serif italic relative">
                                        Fake
                                        <motion.span 
                                            className="absolute -bottom-3 left-0 w-full h-1.5 bg-indigo-600"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 1, delay: 1 }}
                                        />
                                    </span>?
                                </h1>
                                <motion.p 
                                    className="text-lg md:text-2xl text-gray-700 font-medium mt-6 max-w-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    Learn to identify deepfakes with interactive tools, challenges, and AI-powered analysis.
                                </motion.p>

                                {/* CTA Buttons with enhanced design */}
                                <motion.div 
                                    className="mt-10 flex justify-center md:justify-start space-x-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <button 
                                        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 hover:translate-y-1 transform transition-all duration-300"
                                        onClick={() => window.location.href = '/scan'}
                                    >
                                        Try TruthScan
                                    </button>
                                    <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-indigo-200 text-indigo-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-white transition-all duration-300">
                                        Learn More
                                    </button>
                                </motion.div>

                                {/* Floating badges */}
                                <motion.div 
                                    className="hidden md:flex items-center mt-12 space-x-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                >
                                    <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm">
                                        <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                                        <span className="text-sm font-medium text-gray-700">AI Powered Detection</span>
                                    </div>
                                    <div className="flex items-center px-4 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm">
                                        <span className="h-3 w-3 bg-indigo-500 rounded-full mr-2"></span>
                                        <span className="text-sm font-medium text-gray-700">Educational Tools</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Side - Enhanced Image Animation */}
                            <motion.div 
                                className="md:w-1/2 mt-16 md:mt-0 flex justify-center"
                                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-2xl opacity-20 transform -rotate-6"></div>
                                    <img
                                        src={logo}
                                        alt="Sentinel AI"
                                        className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl"
                                    />
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section with Hover Cards */}
                <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">How We Help You Navigate the Truth</h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6"></div>
                            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                                Discover our suite of tools designed to help you identify deepfakes and misinformation in today's digital landscape.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <motion.div 
                                className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">AI Detection Games</h3>
                                    <p className="text-gray-600 mb-6">Test your skills in identifying AI-generated content with our interactive challenges and competitions.</p>
                                    <div className="flex justify-start">
                                        <a href="/game" className="text-indigo-600 font-medium flex items-center group-hover:text-indigo-800 transition-colors">
                                            <span>Try a Game</span>
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div 
                                className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Weekly Challenges</h3>
                                    <p className="text-gray-600 mb-6">Join our community in weekly detection challenges with leaderboards and rewards for top performers.</p>
                                    <div className="flex justify-start">
                                        <a href="/challenge" className="text-purple-600 font-medium flex items-center group-hover:text-purple-800 transition-colors">
                                            <span>Join Challenge</span>
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div 
                                className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Educational Resources</h3>
                                    <p className="text-gray-600 mb-6">Access our library of tutorials, guides, and case studies to improve your deepfake detection skills.</p>
                                    <div className="flex justify-start">
                                        <a href="/truthAcademy" className="text-blue-600 font-medium flex items-center group-hover:text-blue-800 transition-colors">
                                            <span>Explore Resources</span>
                                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Truth Map Section with Parallax Effect */}
                <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center">
                            <motion.div 
                                className="md:w-1/2 md:pr-10"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Navigate the Truth Map</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Our interactive Truth Map guides you through the complex landscape of AI-generated content,
                                    helping you understand where and how deepfakes appear in our daily digital interactions.
                                </p>
                                <button 
                                    className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:translate-y-1 transform transition-all duration-300"
                                    onClick={() => window.location.href = '/map'}
                                >
                                    Explore the Map
                                </button>
                            </motion.div>
                            
                            <motion.div 
                                className="md:w-1/2 mt-10 md:mt-0 perspective-1000"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="relative"
                                    whileHover={{ 
                                        rotateX: 5, 
                                        rotateY: 5,
                                        scale: 1.05 
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl transform rotate-3 scale-105 blur-md opacity-30"></div>
                                    <img 
                                        src={map} 
                                        alt="Truth Map" 
                                        className="relative rounded-xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                                    />
                                    
                                    {/* Interactive Elements */}
                                    <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    
                                    <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Preserving functionality from game_pvp branch's Home.jsx if needed */}
                <div style={{ display: 'none' }}>
                    {/* Hidden elements to preserve any necessary state or functionality */}
                    <input 
                        type="file" 
                        onChange={(e) => setSelectedFile(e.target.files[0])} 
                        accept="image/*,video/*" 
                    />
                </div>

                {/* Fake vs. Real News Section with enhanced styling */}
                <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">CHALLENGE YOURSELF</span>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
                                Spot the Difference: Real vs. Deepfake
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Test your skills at identifying genuine content from AI-generated deepfakes. Can you tell which is which?
                            </p>
                        </motion.div>
                        
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 transform hover:shadow-2xl transition-all duration-300">
                            <News />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Welcome;
