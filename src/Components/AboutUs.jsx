import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

export const AboutUs = () => {
	return (
		<div>
			<Container>
				<Row id="about_us" className='flex-center'>
					<Col sm={12} md={5}>
						<div className='section-title'>
							Sobre nosotros
						</div>
					</Col>
					<Col sm={12} md={7} className='text-left'>
						<div className='item-text'>
							<p><span className="bold">Inteligencia Inmobiliaria</span> representa una trayectoria profesional acumulada de 23 años en el sectór inmobiliario, como una firma integral en el ramo.</p>
							<p>En la actualidad, vivimos en un entorno más competitivo y global, que exige personas más especializadas para satisfacer las necesidades de los grupos de interés, mediante la mejora continua de sus procesos y la maximización de las productividad, calidad y rentabilidad hacia los más altos estándares; rescatando y no olvidando el <span className="bold">lado humano</span>.</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};