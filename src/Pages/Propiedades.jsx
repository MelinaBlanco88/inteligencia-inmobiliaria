import { Row, Col, Container, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { BiMap } from 'react-icons/bi';
import { FaBed, FaBath } from 'react-icons/fa';
import { MdOutlineHouse } from 'react-icons/md';

export const Propiedades = () => {
	return (
		<div>
			<Container>
				<Row>
					<div className='section-title'>
						Propiedades
					</div>
				</Row>

				<Row id="propiedades">
					<Col xs={12} md={6} xl={4}>
						<Card>
							<Row>
								<Card.Img src="https://img10.naventcdn.com/avisos/resize/18/00/65/46/93/32/1200x1200/342066978.jpg" />
							</Row>

							<Row>
								<p className="title-prop">Casa con Uso de Suelo Comercial</p>
								<p className="address-prop">
									<BiMap size={25} />
									Calle 21 número 54, Lomas de Casa Blanca, Querétaro
								</p>
							</Row>

							<Row>
								<Card className="carac-prop">
									<Row>
										<Col xs={4}>
											<FaBed size={25} />
											<p>Habitaciones</p>
											<p>5</p>
										</Col>
										<Col xs={4}>
											<FaBath size={25} />
											<p>Baños</p>
											<p>4</p>
										</Col>
										<Col xs={4}>
											<MdOutlineHouse size={25} />
											<p>Metros Const.</p>
											<p>283 m²</p>
										</Col>
									</Row>
								</Card>
							</Row>
							
							<Row>
								<p className="price-prop">Precio: $ 3,000,000</p>
							</Row>

							<Row>
								<Button href="https://www.inmuebles24.com/propiedades/casa-con-uso-de-suelo-comercial-65469332.html" variant="primary" target="_blank">Ver más </Button>{' '}
							</Row>
						</Card>
					</Col>

					<Col xs={12} md={6} xl={4}>
						<Card>
							<Row>
								<Card.Img src="https://img10.naventcdn.com/avisos/resize/18/00/65/46/93/32/1200x1200/342066978.jpg" />
							</Row>

							<Row>
								<p className="title-prop">Casa con Uso de Suelo Comercial</p>
								<p className="address-prop">
									<BiMap size={25} />
									Calle 21 número 54, Lomas de Casa Blanca, Querétaro
								</p>
							</Row>

							<Row>
								<Card className="carac-prop">
									<Row>
										<Col xs={4}>
											<FaBed size={25} />
											<p>Habitaciones</p>
											<p>5</p>
										</Col>
										<Col xs={4}>
											<FaBath size={25} />
											<p>Baños</p>
											<p>4</p>
										</Col>
										<Col xs={4}>
											<MdOutlineHouse size={25} />
											<p>Metros Const.</p>
											<p>283 m²</p>
										</Col>
									</Row>
								</Card>
							</Row>
							
							<Row>
								<p className="price-prop">Precio: $ 3,000,000</p>
							</Row>

							<Row>
								<Button href="https://www.inmuebles24.com/propiedades/casa-con-uso-de-suelo-comercial-65469332.html" variant="primary" target="_blank">Ver más </Button>{' '}
							</Row>
						</Card>
					</Col>

					<Col xs={12} md={6} xl={4}>
						<Card>
							<Row>
								<Card.Img src="https://img10.naventcdn.com/avisos/resize/18/00/65/46/93/32/1200x1200/342066978.jpg" />
							</Row>

							<Row>
								<p className="title-prop">Casa con Uso de Suelo Comercial</p>
								<p className="address-prop">
									<BiMap size={25} />
									Calle 21 número 54, Lomas de Casa Blanca, Querétaro
								</p>
							</Row>

							<Row>
								<Card className="carac-prop">
									<Row>
										<Col xs={4}>
											<FaBed size={25} />
											<p>Habitaciones</p>
											<p>5</p>
										</Col>
										<Col xs={4}>
											<FaBath size={25} />
											<p>Baños</p>
											<p>4</p>
										</Col>
										<Col xs={4}>
											<MdOutlineHouse size={25} />
											<p>Metros Const.</p>
											<p>283 m²</p>
										</Col>
									</Row>
								</Card>
							</Row>
							
							<Row>
								<p className="price-prop">Precio: $ 3,000,000</p>
							</Row>

							<Row>
								<Button href="https://www.inmuebles24.com/propiedades/casa-con-uso-de-suelo-comercial-65469332.html" variant="primary" target="_blank">Ver más </Button>{' '}
							</Row>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};