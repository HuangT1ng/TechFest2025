import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import { Carousel, Card, Badge, Image, Button, Container, Row, Col} from 'react-bootstrap';
import worldmap from '../assets/worldmap.png'
import './css/map.css';
const Map = () => {
    return (
        <div className="map-banner">
                <Image className="world-map" src={worldmap} fluid />
                <div className="overlay-text">
                    <h2>Global Impact of Deepfake Technology</h2>
                </div>
               
        </div>
    )
}
export default Map;