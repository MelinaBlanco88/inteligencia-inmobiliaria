import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { FiMail, FiPhone } from 'react-icons/fi';

export const Team = () => {
  return (
    <div className="bg-grey">
		<Container id="team">
            <Row>
                <div className='section-title'>
                    Conoce a nuestro equipo
                </div>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={5}>
                    <Card>
                        <Card.Img variant="top" src="./rodrigo.png" />
                        <Card.Body>
                        <Card.Title>Rodrigo Favela</Card.Title>
                        <h6>Socio Fundador</h6>
                        <Card.Text>
                            Licenciado en Derecho con Maestría en Derecho Corporativo con experiencia de 21 años como Abogado de empresas multinacionales y Gobierno Federal, con especial experiencia en el ramo inmobiliario. Actualmente asesor jurídico y administrador de condominios. Presidente de la Asociación Mexicana de Profesionales Inmobiliarios, Sección Querétaro (AMPI) 2022-2023. Miembro del Consejo Estatal de Profesionales Inmobiliarios de Querétaro (CEPIQ) y miembro del Consejo Consultivo de la PROFECO, Delegación Querétaro, así como socio fundador de esta firma.
                        
                            <Row className='team-contact'>
                                <Col md={12}><FiMail /><a href='mailto:rfavela@inteligenciainmobiliaria.mx'>rfavela@inteligenciainmobiliaria.mx</a></Col>
                                <Col md={12}><FiPhone /><a href='tel:+52 44 6146 1006'>+52 44 6146 1006</a></Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={1}></Col>
                <Col md={5}>
                    <Card>
                        <Card.Img variant="top" src="./liz.png" />
                        <Card.Body>
                        <Card.Title>Liz Medélez</Card.Title>
                        <h6>Socio Fundador</h6>
                        <Card.Text>
                            Consultora en Imagen Pública | Experta en comunicación | Certificada por la AIFYC (Asociación Iberoamericana de Formación y Capacitación) | Coach y Capacitador en habilidades para hablar en público, protocolos y personalidad institucional | Apasionada de crear experiencias de cambio positivo en cualquier persona.
                        
                            <Row className='team-contact'>
                                <Col md={12}><FiMail /><a href='mailto:lmedelez@inteligenciainmobiliaria.mx'>lmedelez@inteligenciainmobiliaria.mx</a></Col>
                                <Col md={12}><FiPhone /><a href='tel:+52 44 2138 4813'>+52 44 2138 4813</a></Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
	</div>
  );
}

export default Team;