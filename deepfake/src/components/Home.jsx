import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import { Carousel, Card, Badge, Image, Button, Container, Row, Col} from 'react-bootstrap';
import News from './News';

import { motion } from "framer-motion";
import Map from './Map';
// import { Button } from "@/components/ui/button";
// import Map from './Map';

import './css/card.css';





const Welcome = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const [showGrid, setShowGrid] = useState(false);
    const gridRef = useRef(null);
    
    return (
       
    <>
   
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 min-h-screen ">
            {/* Navigation Bar */}


            {/* Hero Section */}

            <div className="relative overflow-hidden">
                
                <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row ">
                    <div className="md:w-1/2 z-10 ">
                        <h1 className="text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-yellow-800 leading-tight ">
                            Real or <span className="text-yellow-600 font-serif italic">Fake</span>
                        </h1>
                        <div class="max-w-xl xl:max-w-4xl">
                            <div class="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
                                <div class="mb-6 md:mb-0 md:mr-8 pt-3">
                                    <svg width="84" height="10" viewbox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z" fill="#1E254C"></path>
                                    </svg>
                                </div>
                                <div class="max-w-md">
                                    <p class="md:text-2 xl text-yellow-900 font-semibold">Learn to identify deepfakes with interactive tools and challenges.</p>
                                </div>
                                <span>
                                    <svg width="8" height="12" viewbox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z" fill="#FFF2EE"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <section className=" py-10 md:py-24">
                <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row" />


                <div className="container rounded-bl-3xl mx-auto px-4 -mt-8 z-20 relative">
                    <div className="bg-white rounded-lg shadow-xl p-6">
                        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Spot the Difference: Real vs Deepfake</h2>

                        <News />



                    </div>
                </div>
            </section>

        </div>
 
        </>
        
        

        
        // <div className="d-flex justify-content-around">
        //     {/* <Carousel fade interval={3000}>
        //         {slides.map((slide) => (
        //         <Carousel.Item key={slide.image}>
        //             <Image
        //             className="d-block w-100"
        //             src={slide.image}
        //             alt={slide.caption}
        //             />
        //             <Carousel.Caption>
        //             <h3>{slide.caption}</h3>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         ))}
        //     </Carousel> */}
        //     <Container className='welcome-container'>
        //         <h1 className="section-title">Trending: DeepFake News</h1>
        //         <Container className='card-container'>
        //         {/* <h1 className="section-title">Trending: DeepFake News</h1> */}
        //         <Row>
        //             <Col md={6}>
        //             <h1> Real</h1>
        //                 {leftCardData.map((card, index) => (
                            
        //                     <Card style={{ width: '35rem'}}>
        //                         <Card.Img variant="top" src={card.img} />
        //                         <Card.Body className='text-start'>
        //                             <Card.Title>{card.title}</Card.Title>
        //                             <Card.Text>
        //                                 {card.description}
        //                             </Card.Text>
        //                             <input
        //                             type="file"
        //                             id="fileInput"
        //                             style={{ display: "none" }}
                                    
        //                             />
        //                             {/* <Button className='button1' onClick={triggerFileInput} variant="primary">{card.buttonText}</Button> */}
        //                         </Card.Body>
        //                     </Card>
        //                 ))} 
        //                 </Col>
        //                 <Col md={6}>
        //                     <h1> Fake </h1>
        //                     {rightCardData.map((card, index) => (
        //                             <Card style={{ width: '35rem'}}>
        //                             <Card.Img variant="top" src={card.img} />
        //                             <Card.Body className='text-start'>
        //                                 <Card.Title>{card.title}</Card.Title>
        //                                 <Card.Text>
        //                                     {card.description}
        //                                 </Card.Text>
        //                                 <input
        //                                 type="file"
        //                                 id="fileInput"
        //                                 style={{ display: "none" }}
        //                                 />
        //                                 {/* <Button className='button1' onClick={triggerFileInput} variant="primary">{card.buttonText}</Button> */}
        //                             </Card.Body>
        //                         </Card>
        //                     ))} 
        //                 </Col>
                        
                    
        //         </Row>
        //         </Container>
        //     </Container>
           
            
        // </div>
        
)}

export default Welcome;
