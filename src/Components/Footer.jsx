import { Col, Row } from "react-bootstrap";
import { SocialFooter } from "./SocialFooter";
import { Container } from "react-bootstrap";

export const Footer = () => {
	return (
		<div id="footer" className="bg-primary">
			<Container>
				<Row className='py-5'>
					<Col md={12} lg={4} className='text-center text-lg-start'>
						<img className='ms-0' src='./logo-footer.png' alt='Inteligencia Inmobiliaria Logo' width='168px' />
						<p className='copyright'>Copyright © 2022 Inteligencia Inmobiliaria, All rights reserved.</p>
					</Col>
					<Col md={12} lg={4} className='text-center text-lg-start'>
						<p><a href="tel:+52 44 2138 4813">+52 44 2138 4813</a></p>
						<div className="footer-address">
							<a rel="noreferrer" href="https://goo.gl/maps/ZgE1SJAu5FbfuLaK8" target="_blank">
								<p>Lic. Zacarías Oñate 17 Cimatario</p>
								<p>76030 Santiago de Querétaro, Qro.</p>
								<p>Querétaro, Mexico</p>
							</a>
						</div>
						<p><a rel="noreferrer" href="mailto:contacto@inteligenciainmobiliaria.mx">contacto@inteligenciainmobiliaria.mx</a></p>
					</Col>
					<Col md={6} lg={3} className='text-center text-lg-start'>
						<ul className='list-group-group'>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#about_us'>
									¿Quienes somos?
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#products'>
									Propiedades
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#blog'>
									Próximos cursos
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#blog'>
									Blog
								</a>
							</li>
							<li className='list-group-item'>
								<a className='text-decoration-none fw-500' href='#contact_us'>
									Contacto
								</a>
							</li>
						</ul>
					</Col>
					<Col md={6} lg={1} className='content-social'>
						<SocialFooter />
					</Col>
				</Row>
				<Row className='ciudad-creativa'>
					<p>Sitio desarrollado por: <a href="https://ccreativastudio.com/" target='_blank' rel='noreferrer'>Ciudad Creativa</a></p>
				</Row>
			</Container>
		</div>
	);
};