import React from 'react';
import {useEffect, useState} from 'react';
import { Carousel, Card, Badge, Image,Button, Container, Row, Col} from 'react-bootstrap';
import "./css/banner.css";
const News = () => {
    return (
        <Container className='news-container'>
            <h2 className='news-title'>Latest News on Deepfake</h2>
            <Row>
                <Col>
                    <Card className='news-card'>
                        <Card.Img variant="top" src="https://www.rollingstone.com/wp-content/uploads/2021/03/GettyImages-1230531913.jpg" />
                        <Card.Body>
                            <Card.Title>Deepfake Technology: The Future of Misinformation</Card.Title>
                            <Card.Text>
                                Deepfake technology is a growing concern in the digital age. Learn more about the implications of deepfake technology and how it can be used to spread misinformation.  
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className='news-card'>
                        <Card.Img variant="top" src="https://www.rollingstone.com/wp-content/uploads/2021/03/GettyImages-1230531913.jpg" />
                        <Card.Body>
                            <Card.Title>Deepfake Technology: The Future of Misinformation</Card.Title>
                            <Card.Text>
                                Deepfake technology is a growing concern in the digital age. Learn more about the implications of deepfake technology and how it can be used to spread misinformation.  
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className='news-card'>
                        <Card.Img variant="top" src="https://www.rollingstone.com/wp-content/uploads/2021/03/GettyImages-1230531913.jpg" />
                        <Card.Body>
                            <Card.Title>Deepfake Technology: The Future of Misinformation</Card.Title>
                            <Card.Text>
                                Deepfake technology is a growing concern in the digital age. Learn more about the implications of deepfake technology and how it can be used to spread misinformation.  
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>

    )
}

export default News;
