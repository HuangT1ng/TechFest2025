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
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 py-16 md:py-24">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                        {/* Left Side - Text */}
                        <motion.div 
                            className="md:w-1/2 text-center md:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-5xl xs:text-6xl md:text-8xl font-extrabold leading-tight">
                                Real or <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-serif italic">Fake</span>?
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-700 font-medium mt-4">
                                Learn to identify deepfakes with interactive tools, challenges, and AI-powered analysis.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition">
                                    Try TruthScan
                                </button>
                                <button className="px-6 py-3 bg-white border border-indigo-300 text-indigo-700 font-semibold rounded-full hover:bg-indigo-50 transition">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Side - Image Animation */}
                        <motion.div 
                            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={logo}
                                alt="Sentinel AI"
                                className="w-full max-w-lg rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How We Help You Navigate the Truth</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                Discover our suite of tools designed to help you identify deepfakes and misinformation in today's digital landscape.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <motion.div 
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-md"
                                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center md:text-left">AI Detection Games</h3>
                                <p className="text-gray-600">Test your skills in identifying AI-generated content with our interactive challenges and competitions.</p>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div 
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-md"
                                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center md:text-left">Weekly Challenges</h3>
                                <p className="text-gray-600">Join our community in weekly detection challenges with leaderboards and rewards for top performers.</p>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div 
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-md"
                                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center md:text-left">Educational Resources</h3>
                                <p className="text-gray-600">Access our library of tutorials, guides, and case studies to improve your deepfake detection skills.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Truth Map Section */}
                <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
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
                                <p className="text-lg text-gray-600 mb-6">
                                    Our interactive Truth Map guides you through the complex landscape of AI-generated content,
                                    helping you understand where and how deepfakes appear in our daily digital interactions.
                                </p>
                                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition">
                                    Explore the Map
                                </button>
                            </motion.div>
                            
                            <motion.div 
                                className="md:w-1/2 mt-10 md:mt-0"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <img 
                                    src={map} 
                                    alt="Truth Map" 
                                    className="w-full rounded-lg shadow-xl"
                                />
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
            </div>
        </>
    );
};

export default Welcome;
