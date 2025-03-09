import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import { Carousel, Card, Badge, Image, Button, Container, Row, Col} from 'react-bootstrap';
import worldmap from '../assets/worldmap.png';
import truthmap from '../assets/Truthmap.jpg';
import './css/map.css';

const Map = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-indigo-800 mb-6 text-center">Introducing TruthMap 🔎</h1>
                <p className="text-lg text-indigo-700 max-w-3xl mx-auto text-center mb-8">
                    Explore our interactive map showing the impact and spread of misinformation and deepfakes around the digital landscape.
                </p>
                
                {/* TruthMap with advanced styling */}
                <div className="flex justify-center items-center mt-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <img
                            src={truthmap}
                            alt="TruthMap"
                            className="relative w-full md:max-w-4xl h-auto rounded-lg shadow-lg border border-gray-100"
                        />
                    </div>
                </div>
                
                {/* Legacy map component - can be displayed below if needed */}
                <div className="mt-12 hidden">
                    <div className="map-banner">
                        <Image className="world-map" src={worldmap} fluid />
                        <div className="overlay-text">
                            <h2>Global Impact of Deepfake Technology</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;