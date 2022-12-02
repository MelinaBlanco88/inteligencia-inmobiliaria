import { Col, Row } from "react-bootstrap";  
import Carousel from 'react-bootstrap/Carousel';

export function Testimonios() {
    return (
        <section id="testimonials">
            <Col sm={8} md={6} lg={5} className='col-testimonials'>
                <Carousel
                    variant="dark"
                >
                    <Carousel.Item>
                        <Carousel.Caption>
                            <p>Son muy profesionales, me ayudaron en toda la gestión de mi crédito inmobiliario de manera fácil y segura.</p>
                        </Carousel.Caption>

                        <Row>
                            <Col xs={2}><img className="d-block" src="./profile.png" alt="Testimonial" /></Col>
                            <Col xs={10}>
                                <p className="name">Chiara Charrasco</p>
                                <span className="job">Analista Funcional Sr</span>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <p>Son muy profesionales, me ayudaron en toda la gestión de mi crédito inmobiliario de manera fácil y segura.</p>
                        </Carousel.Caption>

                        <Row>
                            <Col xs={2}><img className="d-block" src="./profile.png" alt="Testimonial" /></Col>
                            <Col xs={10}>
                                <p className="name">Chiara Charrasco</p>
                                <span className="job">Analista Funcional Sr</span>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </section>
    );
}
  
export default Testimonios;
