import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import { Carousel, Card, Badge, Image, Button, Container, Row, Col} from 'react-bootstrap';
import News from './News';
import image2 from '../assets/Deepfakes.jpg.webp'
import image3 from '../assets/fakespecies.webp'
import image4 from '../assets/240306-donald-trump-AI-ew-153p-449e9b.webp'
// import Map from './Map';

import './css/card.css';


const leftCardData = [
    {
        title: 'Obama ',
        description: 'Upload media to check if it is a deepfake',
        buttonText: 'Upload Image',
        img: image2
    },
    {
        title: 'Latest News on Deepfake',
        description: 'This is card 1',
        buttonText: 'Click me',
        img: image2
    },
    
 
];
const rightCardData = [
    {
        title: 'New Species found in China',
        description: 'Tiger and bird hybrid found in China',
        buttonText: 'Upload Image',
        img: image3
    },
    {
        title: 'Tariffs and Trade',
        description: 'Trump has imposed tariffs on China',
        img: image4
    },
]


const Welcome = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="d-flex justify-content-around">
            {/* <Carousel fade interval={3000}>
                {slides.map((slide) => (
                <Carousel.Item key={slide.image}>
                    <Image
                    className="d-block w-100"
                    src={slide.image}
                    alt={slide.caption}
                    />
                    <Carousel.Caption>
                    <h3>{slide.caption}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel> */}
            <Container className='welcome-container'>
                <h1 className="section-title">Trending: DeepFake News</h1>
                <Container className='card-container'>
                {/* <h1 className="section-title">Trending: DeepFake News</h1> */}
                <Row>
                    <Col md={6}>
                    <h1> Real</h1>
                        {leftCardData.map((card, index) => (
                            
                            <Card style={{ width: '35rem'}}>
                                <Card.Img variant="top" src={card.img} />
                                <Card.Body className='text-start'>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>
                                        {card.description}
                                    </Card.Text>
                                    <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: "none" }}
                                    
                                    />
                                    {/* <Button className='button1' onClick={triggerFileInput} variant="primary">{card.buttonText}</Button> */}
                                </Card.Body>
                            </Card>
                        ))} 
                        </Col>
                        <Col md={6}>
                            <h1> Fake </h1>
                            {rightCardData.map((card, index) => (
                                    <Card style={{ width: '35rem'}}>
                                    <Card.Img variant="top" src={card.img} />
                                    <Card.Body className='text-start'>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.description}
                                        </Card.Text>
                                        <input
                                        type="file"
                                        id="fileInput"
                                        style={{ display: "none" }}
                                        />
                                        {/* <Button className='button1' onClick={triggerFileInput} variant="primary">{card.buttonText}</Button> */}
                                    </Card.Body>
                                </Card>
                            ))} 
                        </Col>
                        
                    
                </Row>
                </Container>
            </Container>
           
            
        </div>
        
)}

export default Welcome;
