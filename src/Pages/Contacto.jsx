import { Row, Container, Col } from "react-bootstrap";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Iframe from 'react-iframe'	

export const Contacto = () => {
	return (
		<div id="full-contact">
			<Container>
				<Row>
					<div className='section-title'>
						Contacto
					</div>
				</Row>

				<Row id="contact">
					<Col md={7}>
						<Row>
							<Col md={5}>
								<Row className="content-contact">
									<Col md={2}><FaPhoneAlt size={20} /></Col>
									<Col md={10}>
										<span className="title">Phone</span>
										<a href="tel:+52 44 2138 4813" target='_blank' rel='noreferrer'>+52 44 2138 4813</a>
									</Col>
								</Row>
							</Col>

							<Col md={7}>
								<Row className="content-contact">
									<Col md={1}><MdEmail size={20} /></Col>
									<Col md={11}>
										<span className="title">Email</span>
										<a href="mailto:contacto@inteligenciainmobiliaria.mx" target='_blank' rel='noreferrer'>contacto@inteligenciainmobiliaria.mx</a>
									</Col>
								</Row>
							</Col>
						</Row>

						<Row>
							<form>
								
							</form>
						</Row>
					</Col>
					<Col md={5}>
						<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.0960908891043!2d-100.39018420000001!3d20.584133099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344d410d6236d%3A0xc031345c297d1a6!2sLic.%20Zacar%C3%ADas%20O%C3%B1ate%2017%2C%20Cimatario%2C%2076030%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1670345951307!5m2!1ses-419!2smx"
						width="100%"
						className="iframe-map"/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};