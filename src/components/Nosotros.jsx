import React, { Fragment } from "react";
import { Container, Row, Carousel, Col } from "react-bootstrap";
import { FaTruck } from 'react-icons/fa';
import { BiCheckShield } from "react-icons/bi";
import { MdPayments } from "react-icons/md";


const Nosotros = () => {
    return (
        <Fragment>
            <Container>
                <Row className="px-0">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ height: "calc(100vh - 25vh)" }}
                                src="https://mdbootstrap.com/img/new/slides/041.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ height: "calc(100vh - 25vh)" }}
                                src="https://mdbootstrap.com/img/new/slides/040.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ height: "calc(100vh - 25vh)" }}
                                src="https://mdbootstrap.com/img/new/slides/039.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <FaTruck size={'5rem'} color={'purple'} />
                        <p>Envíos a todo Chile</p>
                    </Col>
                    <Col className="text-center">
                        <BiCheckShield size={'5rem'} color={'purple'} />
                        <p>Elige tu método de pago</p>
                    </Col>
                    <Col className="text-center">
                        <MdPayments size={'5rem'} color={'purple'} />
                        <p>Compra online segur@</p>
                    </Col>
                </Row>
            </Container >
        </Fragment>
    );
}



export default Nosotros;